import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseSectionListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  courseId!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty({ required: false })
  order?: number;

  @Expose()
  @ApiProperty()
  date!: string;
}
