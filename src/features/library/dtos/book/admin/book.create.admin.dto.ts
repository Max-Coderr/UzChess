import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class BookCreateAdminDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  @Type(() => Number)
  authorId!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  @Type(() => Number)
  categoryId!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  @Type(() => Number)
  languageId!: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  @Type(() => Number)
  difficultyId!: number;

  @IsString()
  @MaxLength(128)
  @ApiProperty({ type: String })
  title!: string;

  @IsString()
  @ApiProperty({ type: String })
  description!: string;

  @IsOptional()
  @MaxLength(128)
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  image?: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  @Type(() => Number)
  price!: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  newPrice?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  rating?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  reviewCount?: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  @Type(() => Number)
  pages!: number;

  @IsDateString()
  @ApiProperty({ type: String })
  pubDate!: string;
}
