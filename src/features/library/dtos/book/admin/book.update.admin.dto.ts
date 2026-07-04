import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class BookUpdateAdminDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  authorId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  categoryId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  languageId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  difficultyId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiProperty({ type: String, required: false })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, required: false })
  description?: string;

  @IsOptional()
  @MaxLength(128)
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  image?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  price?: number;

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

  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  pages?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ type: String, required: false })
  pubDate?: string;
}
