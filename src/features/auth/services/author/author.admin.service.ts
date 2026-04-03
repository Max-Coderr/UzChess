import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorEntity } from '../../entities/author.entity';
import { AuthorCreateAdminDto } from '../../dtos/author/admin/author.create.admin.dto';
import { AuthorUpdateAdminDto } from '../../dtos/author/admin/author.update.admin.dto';

@Injectable()
export class AuthorAdminService {
  async findAll() {
    return await AuthorEntity.find();
  }

  async findOne(id: number) {
    const author = await AuthorEntity.findOneBy({ id });
    if (!author) throw new NotFoundException('Author not found');
    return author;
  }

  async create(payload: AuthorCreateAdminDto) {
    const author = AuthorEntity.create(payload as unknown as AuthorEntity);
    await AuthorEntity.save(author);
    return author;
  }

  async update(id: number, payload: AuthorUpdateAdminDto) {
    const author = await this.findOne(id);
    Object.assign(author, payload);
    await AuthorEntity.save(author);
    return author;
  }

  async remove(id: number) {
    const author = await this.findOne(id);
    await AuthorEntity.remove(author);
    return true;
  }
}
