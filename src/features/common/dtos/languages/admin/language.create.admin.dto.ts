import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageCreateAdminDto {
  @ApiProperty({ maxLength: 32 })
  @IsString()
  @MaxLength(32)
  title!: string;

  @ApiProperty({ maxLength: 2 })
  @IsString()
  @MaxLength(2)
  code!: string;
}
