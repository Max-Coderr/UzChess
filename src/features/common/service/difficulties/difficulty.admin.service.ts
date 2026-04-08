import { Injectable, NotFoundException } from '@nestjs/common';
import { Difficulty } from '../../entities/difficulty.entity';
import { DifficultyCreateAdminDto } from '../../dtos/difficulties/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/difficulties/admin/difficulty.update.admin.dto';
import { DifficultyListAdminDto } from '../../dtos/difficulties/admin/difficulty.list.admin.dto';
import { SourceCode } from 'eslint';
import Config = SourceCode.Config;
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';




@Injectable()
export class DifficultyAdminService {
  constructor(private readonly config: ConfigService) {}
  async create(payload: DifficultyCreateAdminDto, icon: Express.Multer.File) {
    const difficult = Difficulty.create(payload as Difficulty);
    difficult.icon = icon.path;
    await Difficulty.save(difficult);
    return difficult;
  }

  async getAll() {
    const rawDifficulty = await Difficulty.find();
    for (let difficulty of rawDifficulty) {
      difficulty.icon = this.config.getOrThrow<string>('BASE_URL') + '/' + difficulty.icon;
    }
    return plainToInstance(DifficultyListAdminDto, rawDifficulty);
  }

  async getOne(id: number) {
    const difficult = await Difficulty.findOneBy({ id });
    if (!difficult) {
      throw new NotFoundException('difficult with given id not found');
    }

    return difficult;
  }

  async update(id: number, payload: DifficultyUpdateAdminDto, icon: Express.Multer.File) {
    const difficult = await Difficulty.findOneBy({ id });
    if (!difficult) {
      throw new NotFoundException('difficult with given id not found');
    }

    Object.assign(difficult, Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)));

    if (icon) {
      difficult.icon = icon.path;
    }

    await Difficulty.save(difficult);
    return difficult;
  }

  async delete(id: number) {
    const difficult = await Difficulty.findOneBy({ id });
    if (!difficult) {
      throw new NotFoundException('difficult with given id not found');
    }

    await Difficulty.remove(difficult);
  }
}