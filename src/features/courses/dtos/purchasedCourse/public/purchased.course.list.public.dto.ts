import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PurchasedCourseListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  courseId!: number;

  @Expose()
  @ApiProperty()
  isCompleted!: boolean;

  @Expose()
  @ApiProperty()
  date!: string;
}
