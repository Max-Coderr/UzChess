import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseCategoryCreateAdminDto {
  @ApiProperty()
  @IsString()
  @MaxLength(64)
  title!: string;
}
