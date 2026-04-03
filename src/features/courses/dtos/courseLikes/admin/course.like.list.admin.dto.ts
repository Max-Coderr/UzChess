import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseLikeListAdminDto {
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
  date!: string;

  @Expose()
  @ApiProperty()
  createdAt!: string;
}
