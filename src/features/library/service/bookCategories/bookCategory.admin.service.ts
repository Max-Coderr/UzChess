import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCategory } from '../../entities/bookCategory.entity';
import { BookCategoryCreateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.update.admin.dto';

@Injectable()
export class BookCategoryAdminService {
  async findAll() {
    return await BookCategory.find();
  }

  async findOne(id: number) {
    const bookCategory = await BookCategory.findOneBy({ id });
    if (!bookCategory) throw new NotFoundException('BookCategory not found');
    return bookCategory;
  }

  async create(payload: BookCategoryCreateAdminDto) {
    const bookCategory = BookCategory.create(payload as unknown as BookCategory);
    await BookCategory.save(bookCategory);
    return bookCategory;
  }

  async update(id: number, payload: BookCategoryUpdateAdminDto) {
    const bookCategory = await this.findOne(id);
    Object.assign(bookCategory, payload);
    await BookCategory.save(bookCategory);
    return bookCategory;
  }

  async remove(id: number) {
    const bookCategory = await this.findOne(id);
    await BookCategory.remove(bookCategory);
    return true;
  }
}
