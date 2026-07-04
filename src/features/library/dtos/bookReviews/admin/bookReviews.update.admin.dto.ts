import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookReviewsUpdateAdminDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  userId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  bookId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  rating?: number;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  @ApiProperty({ required: false })
  comment?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  date?: string;
}
