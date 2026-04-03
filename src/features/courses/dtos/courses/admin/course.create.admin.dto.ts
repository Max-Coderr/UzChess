import { IsInt, IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseCreateAdminDto {
  @ApiProperty()
  @IsInt()
  authorId!: number;

  @ApiProperty()
  @IsInt()
  categoryId!: number;

  @ApiProperty()
  @IsInt()
  languageId!: number;

  @ApiProperty()
  @IsInt()
  difficultyId!: number;

  @ApiProperty({ maxLength: 128 })
  @IsString()
  @MaxLength(128)
  title!: string;

  @ApiProperty({ maxLength: 128 })
  @IsString()
  @MaxLength(128)
  image!: string;

  @ApiProperty()
  @IsString()
  price!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  newPrice?: string;
}
