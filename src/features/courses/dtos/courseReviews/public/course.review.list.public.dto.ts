import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseReviewListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  userId!: number;

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
