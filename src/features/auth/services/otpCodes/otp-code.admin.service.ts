import { Injectable, NotFoundException } from '@nestjs/common';
import { OtpCode } from '../../entities/otp-code.entity';

@Injectable()
export class OtpCodeAdminService {
  async findAll(): Promise<OtpCode[]> {
    return OtpCode.find();
  }

  async findOne(id: number): Promise<OtpCode> {
    const otpCode = await OtpCode.findOneBy({ id });
    if (!otpCode) throw new NotFoundException('OTP code not found');
    return otpCode;
  }

  async remove(id: number): Promise<void> {
    const otpCode = await this.findOne(id);
    await OtpCode.remove(otpCode);
  }
}
