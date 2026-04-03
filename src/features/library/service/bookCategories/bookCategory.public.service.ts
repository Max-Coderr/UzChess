import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCategory } from '../../entities/bookCategory.entity';

@Injectable()
export class BookCategoryPublicService {
  async findAll() {
    return await BookCategory.find();
  }

  async findOne(id: number) {
    const bookCategory = await BookCategory.findOneBy({ id });
    if (!bookCategory) throw new NotFoundException('BookCategory not found');
    return bookCategory;
  }
}
