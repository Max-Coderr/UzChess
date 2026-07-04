import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class ResendOtpDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  login!: string;
}
