import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseLessonListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty({ required: false })
  thumbnail?: string;

  @Expose()
  @ApiProperty({ required: false })
  order?: number;

  @Expose()
  @ApiProperty()
  isFree!: boolean;
}
