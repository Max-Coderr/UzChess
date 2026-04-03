import { Injectable, NotFoundException } from '@nestjs/common';
import { Language } from '../../entities/language.entity';

@Injectable()
export class LanguagePublicService {
  async findAll() {
    return await Language.find();
  }

  async findOne(id: number) {
    const language = await Language.findOneBy({ id });
    if (!language) throw new NotFoundException('Language not found');
    return language;
  }
}
