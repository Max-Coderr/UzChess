import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength } from 'class-validator';

export class SetPasswordDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  login!: string;

  @ApiProperty()
  @IsString()
  @Length(6, 6)
  code!: string;

  @ApiProperty()
  @IsString()
  @MaxLength(64)
  password!: string;
}
