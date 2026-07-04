import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PaginationFilters } from '../../common/filters/pagination.filter';

export class BookFilters extends PaginationFilters {
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => Number)
  languageId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => Number)
  categoryId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => Number)
  difficultyId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => Number)
  rating?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  search?: string;
}
