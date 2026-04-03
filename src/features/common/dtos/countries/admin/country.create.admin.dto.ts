import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CountryCreateAdminDto {
  @IsString()
  @ApiProperty()
  @MaxLength(64)
  title!: string;

  @IsString()
  @ApiProperty()
  @MaxLength(128)
  flag!: string;
}