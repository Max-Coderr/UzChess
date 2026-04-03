import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseLessonDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty({ required: false })
  content?: string;

  @Expose()
  @ApiProperty({ required: false })
  thumbnail?: string;

  @Expose()
  @ApiProperty()
  video!: string;

  @Expose()
  @ApiProperty({ required: false })
  order?: number;

  @Expose()
  @ApiProperty()
  isFree!: boolean;
}
