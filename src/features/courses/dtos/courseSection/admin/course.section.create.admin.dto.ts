import { IsInt, IsString, IsOptional, IsDateString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseSectionCreateAdminDto {
  @ApiProperty()
  @IsInt()
  courseId!: number;

  @ApiProperty({ maxLength: 256 })
  @IsString()
  @MaxLength(256)
  title!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  order?: number;

  @ApiProperty()
  @IsDateString()
  date!: string;
}
