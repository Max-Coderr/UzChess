import { BadRequestException, Injectable } from '@nestjs/common';
import { OtpCode } from '../../entities/otp-code.entity';
import { OtpType } from '../../../../core/enums/otp-type.enum';
import { User } from '../../entities/user.entity';

@Injectable()
export class OtpCodePublicService {
  async sendOtp(user: User, type: OtpType) {
    // first remove any old otp codes for this user
    await this.clearOldCodes(user.id);

    const otpCode = OtpCode.create({
      userId: user.id,
      code: this.createCode(),
      date: new Date().toISOString(),
      type: type,
    });
    await OtpCode.save(otpCode);

    // for now just log it, later this will send sms/email
    console.log(`OTP for user ${user.login}: ${otpCode.code}`);
  }

  async checkOtp(userId: number, code: string) {
    const otpCode = await OtpCode.findOne({
      where: { userId },
      order: { createdAt: 'DESC' },
    });

    if (!otpCode || otpCode.code !== code) {
      throw new BadRequestException('Code does not match');
    }

    // check if code expired
    const expireMs = Number(process.env.OTP_EXPIRE) * 1000;
    const timePassed = Date.now() - Date.parse(otpCode.createdAt);
    if (timePassed > expireMs) {
      throw new BadRequestException('Code has expired');
    }

    return true;
  }

  private createCode(): string {
    // generate a random 6 digit code
    const raw = Math.floor(Math.random() * 1_000_000).toString();
    return raw.padStart(6, '0');
  }

  private async clearOldCodes(userId: number) {
    const existing = await OtpCode.findBy({ userId });
    if (existing.length > 0) {
      await OtpCode.remove(existing);
    }
  }
}
