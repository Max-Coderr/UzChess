import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../../entities/book.entity';
import { BookFilters } from '../../filters/book.filters';
import { ILike } from 'typeorm';

@Injectable()
export class BookPublicService {
  async getAll(filters: BookFilters) {
    const where: any = {};
    if (filters.languageId) where.languageId = filters.languageId;
    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.difficultyId) where.difficultyId = filters.difficultyId;
    if (filters.rating) where.rating = filters.rating;

    if (filters.search) {
      where.title = ILike(`%${filters.search}%`);
    }

    const take = filters.size ?? 10;
    const page = filters.page ?? 1;
    const skip = (page - 1) * take;

    const [data, totalCount] = await Book.findAndCount({
      where,
      relations: ['author', 'category', 'language', 'difficulty'],
      take,
      skip,
      order: { id: 'DESC' },
    });

    const totalPages = Math.ceil(totalCount / take);
    const previousPage = page > 1 ? page - 1 : null;
    const nextPage = page < totalPages ? page + 1 : null;

    return {
      totalCount,
      totalPages,
      previousPage,
      currentPage: page,
      nextPage,
      data,
    };
  }

  async getOne(id: number) {
    const book = await Book.findOne({
      where: { id },
      relations: ['author', 'category', 'language', 'difficulty'],
    });
    if (!book) {
      throw new NotFoundException('Book with given id not found');
    }
    return book;
  }
}
