import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AuthorListAdminDto } from '../../../../auth/dtos/author/admin/author.list.admin.dto';
import { BookCategoryListAdminDto } from '../../bookCategories/admin/bookCategory.list.admin.dto';
import { LanguageListAdminDto } from '../../../../common/dtos/languages/admin/language.list.admin.dto';
import { DifficultyListAdminDto } from '../../../../common/dtos/difficulties/admin/difficulty.list.admin.dto';

export class BookListPublicDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty({ type: () => AuthorListAdminDto })
  @Type(() => AuthorListAdminDto)
  author!: AuthorListAdminDto;

  @Expose()
  @ApiProperty({ type: () => BookCategoryListAdminDto })
  @Type(() => BookCategoryListAdminDto)
  category!: BookCategoryListAdminDto;

  @Expose()
  @ApiProperty({ type: () => LanguageListAdminDto })
  @Type(() => LanguageListAdminDto)
  language!: LanguageListAdminDto;

  @Expose()
  @ApiProperty({ type: () => DifficultyListAdminDto })
  @Type(() => DifficultyListAdminDto)
  difficulty!: DifficultyListAdminDto;

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
  @ApiProperty()
  newPrice!: number;

  @Expose()
  @ApiProperty()
  rating!: number;

  @Expose()
  @ApiProperty()
  reviewCount!: number;

  @Expose()
  @ApiProperty()
  pages!: number;

  @Expose()
  @ApiProperty()
  pubDate!: string;

  @Expose()
  @ApiProperty()
  description!: string;
}
