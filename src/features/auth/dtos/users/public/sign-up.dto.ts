import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { LoginType } from '../../../../../core/enums/login-type.enum';

export class SignUpDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  fullName!: string;

  @ApiProperty()
  @IsString()
  @MaxLength(64)
  login!: string;

  @ApiProperty({ enum: LoginType })
  @IsEnum(LoginType)
  loginType!: LoginType;
}
