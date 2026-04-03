import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DifficultyCreateAdminDto {
  @ApiProperty({ maxLength: 32 })
  @IsString()
  @MaxLength(32)
  title!: string;

  @ApiProperty({ maxLength: 128 })
  @IsString()
  @MaxLength(128)
  icon!: string;
}
