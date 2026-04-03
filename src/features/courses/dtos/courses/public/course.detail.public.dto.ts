import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseDetailPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  image!: string;

  @Expose()
  @ApiProperty()
  price!: number;

  @Expose()
  @ApiProperty({ required: false })
  newPrice?: number;

  @Expose()
  @ApiProperty()
  rating!: number;

  @Expose()
  @ApiProperty()
  reviewsCount!: number;

  @Expose()
  @ApiProperty()
  sectionsCount!: number;

  @Expose()
  @ApiProperty()
  lessonsCount!: number;

  @Expose()
  @ApiProperty()
  authorId!: number;

  @Expose()
  @ApiProperty()
  categoryId!: number;

  @Expose()
  @ApiProperty()
  languageId!: number;

  @Expose()
  @ApiProperty()
  difficultyId!: number;

  @Expose()
  @ApiProperty()
  createdAt!: string;
}
