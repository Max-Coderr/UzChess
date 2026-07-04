import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ILike } from 'typeorm';
import { User } from '../../entities/user.entity';
import { OtpCode } from '../../entities/otp-code.entity';
import { OtpType } from '../../../../core/enums/otp-type.enum';
import { OtpCodePublicService } from '../otpCodes/otp-code.public.service';
import { SignUpDto } from '../../dtos/users/public/sign-up.dto';
import { SignInDto } from '../../dtos/users/public/sign-in.dto';
import { VerifyOtpDto } from '../../dtos/users/public/verify-otp.dto';
import { SetPasswordDto } from '../../dtos/users/public/set-password.dto';
import { ResendOtpDto } from '../../dtos/users/public/resend-otp.dto';
import { UserUpdatePublicDto } from '../../dtos/users/public/user.update.public.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UserPublicService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly otpService: OtpCodePublicService,
  ) {}

  async signUp(payload: SignUpDto) {
    let user = await User.findOne({ where: { login: ILike(payload.login) } });

    if (user && user.isActive && user.isVerified) {
      throw new BadRequestException('User with this login already exists');
    }

    if (user) {
      user.fullName = payload.fullName;
    } else {
      user = User.create(payload as unknown as User);
    }

    await User.save(user);
    await this.otpService.sendOtp(user, OtpType.register);
  }

  async signIn(payload: SignInDto) {
    const user = await User.findOne({ where: { login: ILike(payload.login) } });

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive || !user.isVerified) {
      throw new UnauthorizedException('Account is not active');
    }

    const passwordOk = await argon2.verify(user.password, payload.password);
    if (!passwordOk) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const tokenPayload = {
      id: user.id,
      login: user.login,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    return { accessToken };
  }

  async verifyOtp(payload: VerifyOtpDto) {
    const user = await User.findOne({ where: { login: ILike(payload.login) } });
    if (!user) {
      throw new BadRequestException('User with this login not found');
    }

    await this.otpService.checkOtp(user.id, payload.code);
    user.isVerified = true;
    await User.save(user);
  }

  async setPassword(payload: SetPasswordDto) {
    const user = await User.findOne({ where: { login: ILike(payload.login) } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.otpService.checkOtp(user.id, payload.code);
    user.password = await argon2.hash(payload.password);
    user.isActive = true;
    await User.save(user);
  }

  async resendOtp(payload: ResendOtpDto) {
    const user = await User.findOne({ where: { login: ILike(payload.login) } });
    if (!user) {
      throw new NotFoundException('User with this login not found');
    }

    const otpExpireMs = Number(process.env.OTP_EXPIRE) * 1000;
    const lastOtp = await OtpCode.findOne({
      where: { userId: user.id },
      order: { createdAt: 'DESC' },
    });

    if (lastOtp) {
      const timePassed = Date.now() - Date.parse(lastOtp.createdAt);
      if (timePassed < otpExpireMs) {
        throw new BadRequestException('Previous code has not expired yet');
      }
    }

    await this.otpService.sendOtp(user, OtpType.register);
  }

  async findOne(id: number) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, payload: UserUpdatePublicDto) {
    const user = await this.findOne(id);
    Object.assign(user, payload);
    await User.save(user);
    return user;
  }
}
