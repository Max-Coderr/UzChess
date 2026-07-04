import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../../entities/book.entity';
import { BookCreateAdminDto } from '../../dtos/book/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/book/admin/book.update.admin.dto';

@Injectable()
export class BookAdminService {
  async create(payload: BookCreateAdminDto, image?: Express.Multer.File) {
    const book = Book.create(payload as unknown as Book);
    if (image) {
      book.image = image.path;
    }
    await Book.save(book);
    return book;
  }

  async getAll(userId?: number) {
    const books = await Book.find({
      relations: ['author', 'category', 'language', 'difficulty', 'likes'],
      order: { id: 'DESC' },
    });

    if (userId) {
      for (const book of books) {
        book.isLike = !!(book.likes && book.likes.some((like) => like.userId === userId));
      }
    }
    return books;
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

  async update(id: number, payload: BookUpdateAdminDto, image?: Express.Multer.File) {
    const book = await Book.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book with given id not found');
    }

    Object.assign(
      book,
      Object.fromEntries(Object.entries(payload).filter(([_, v]) => v !== undefined)),
    );

    if (image) {
      book.image = image.path;
    }

    await Book.save(book);
    return book;
  }

  async delete(id: number) {
    const book = await Book.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book with given id not found');
    }
    await Book.remove(book);
    return true;
  }
}
