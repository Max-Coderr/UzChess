import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { AuthorListAdminDto } from '../../../../auth/dtos/author/admin/author.list.admin.dto';
import { BookCategoryListAdminDto } from '../../bookCategories/admin/bookCategory.list.admin.dto';
import { LanguageListAdminDto } from '../../../../common/dtos/languages/admin/language.list.admin.dto';
import { DifficultyListAdminDto } from '../../../../common/dtos/difficulties/admin/difficulty.list.admin.dto';

export class BookDetailAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose({ name: 'author' })
  @ApiProperty({ type: () => AuthorListAdminDto })
  @Type(() => AuthorListAdminDto)
  author!: AuthorListAdminDto;

  @Expose({ name: 'category' })
  @ApiProperty({ type: () => BookCategoryListAdminDto })
  @Type(() => BookCategoryListAdminDto)
  category!: BookCategoryListAdminDto;

  @Expose({ name: 'language' })
  @ApiProperty({ type: () => LanguageListAdminDto })
  @Type(() => LanguageListAdminDto)
  language!: LanguageListAdminDto;

  @Expose({ name: 'difficulty' })
  @ApiProperty({ type: () => DifficultyListAdminDto })
  @Type(() => DifficultyListAdminDto)
  difficulty!: DifficultyListAdminDto;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  description!: string;

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
  createdAt!: string;

  @Expose()
  @ApiProperty()
  updatedAt!: string;
}
