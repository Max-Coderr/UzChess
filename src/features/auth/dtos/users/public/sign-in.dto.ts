import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  login!: string;

  @ApiProperty()
  @IsString()
  @MaxLength(32)
  password!: string;
}
