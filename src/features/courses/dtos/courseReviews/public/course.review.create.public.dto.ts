import { IsInt, IsString, IsOptional, IsDateString, Max, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseReviewCreatePublicDto {
  @ApiProperty()
  @IsInt()
  courseId!: number;

  @ApiProperty({ minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating!: number;

  @ApiProperty({ required: false, maxLength: 512 })
  @IsOptional()
  @IsString()
  @MaxLength(512)
  comment?: string;

  @ApiProperty()
  @IsDateString()
  date!: string;
}
