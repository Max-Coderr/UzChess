import { PartialType } from '@nestjs/swagger';
import { BookCategoryCreateAdminDto } from './bookCategory.create.admin.dto';

export class BookCategoryUpdateAdminDto extends PartialType(BookCategoryCreateAdminDto) {}
