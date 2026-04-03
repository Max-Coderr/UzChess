import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseReviewListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  userId!: number;

  @Expose()
  @ApiProperty()
  courseId!: number;

  @Expose()
  @ApiProperty()
  rating!: number;

  @Expose()
  @ApiProperty({ required: false })
  comment?: string;

  @Expose()
  @ApiProperty()
  date!: string;
}
