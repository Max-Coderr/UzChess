import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserPublicService } from '../../services/users/user.public.service';
import { SignUpDto } from '../../dtos/users/public/sign-up.dto';
import { SignInDto } from '../../dtos/users/public/sign-in.dto';
import { VerifyOtpDto } from '../../dtos/users/public/verify-otp.dto';
import { SetPasswordDto } from '../../dtos/users/public/set-password.dto';
import { ResendOtpDto } from '../../dtos/users/public/resend-otp.dto';

@ApiTags('Auth')
@Controller('auth')
export class UserAuthController {
  constructor(private readonly service: UserPublicService) {}

  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto) {
    return await this.service.signUp(dto);
  }

  @Post('sign-in')
  async signIn(@Body() dto: SignInDto) {
    return await this.service.signIn(dto);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() dto: VerifyOtpDto) {
    return await this.service.verifyOtp(dto);
  }

  @Post('set-password')
  async setPassword(@Body() dto: SetPasswordDto) {
    return await this.service.setPassword(dto);
  }

  @Post('resend-otp')
  async resendOtp(@Body() dto: ResendOtpDto) {
    return await this.service.resendOtp(dto);
  }
}
