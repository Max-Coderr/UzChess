import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class ColorCreateAdminDto {
  @ApiProperty()
  @IsString()
  @MaxLength(128)
  title!: string;

  @ApiProperty()
  @IsString()
  @MaxLength(10)
  color!: string;
}
