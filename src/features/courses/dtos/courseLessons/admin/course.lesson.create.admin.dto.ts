import { IsInt, IsString, IsOptional, IsBoolean, IsDateString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseLessonCreateAdminDto {
  @ApiProperty()
  @IsInt()
  courseId!: number;

  @ApiProperty()
  @IsInt()
  courseSectionId!: number;

  @ApiProperty({ maxLength: 128 })
  @IsString()
  @MaxLength(128)
  title!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ required: false, maxLength: 128 })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  thumbnail?: string;

  @ApiProperty({ maxLength: 256 })
  @IsString()
  @MaxLength(256)
  video!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  order?: number;

  @ApiProperty()
  @IsDateString()
  date!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isFree?: boolean;
}
