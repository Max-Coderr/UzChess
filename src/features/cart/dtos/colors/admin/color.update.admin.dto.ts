import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ColorUpdateAdminDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(128)
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(10)
  color?: string;
}
