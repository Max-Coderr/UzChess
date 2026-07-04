import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  login!: string;

  @ApiProperty()
  @IsString()
  @Length(6, 6)
  code!: string;
}
