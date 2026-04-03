import { Injectable, NotFoundException } from '@nestjs/common';
import { Language } from '../../entities/language.entity';
import { LanguageCreateAdminDto } from '../../dtos/languages/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/languages/admin/language.update.admin.dto';

@Injectable()
export class LanguageAdminService {
  async findAll() {
    return await Language.find();
  }

  async findOne(id: number) {
    const language = await Language.findOneBy({ id });
    if (!language) throw new NotFoundException('Language not found');
    return language;
  }

  async create(payload: LanguageCreateAdminDto) {
    const language = Language.create(payload as unknown as Language);
    await Language.save(language);
    return language;
  }

  async update(id: number, payload: LanguageUpdateAdminDto) {
    const language = await this.findOne(id);
    Object.assign(language, payload);
    await Language.save(language);
    return language;
  }

  async remove(id: number) {
    const language = await this.findOne(id);
    await Language.remove(language);
    return true;
  }
}
