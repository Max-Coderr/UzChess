import { Injectable, NotFoundException } from '@nestjs/common';
import { Difficulty } from '../../entities/difficulty.entity';
import { DifficultyCreateAdminDto } from '../../dtos/difficulties/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/difficulties/admin/difficulty.update.admin.dto';

@Injectable()
export class DifficultyAdminService {
  async findAll() {
    return await Difficulty.find();
  }

  async findOne(id: number) {
    const difficulty = await Difficulty.findOneBy({ id });
    if (!difficulty) throw new NotFoundException('Difficulty not found');
    return difficulty;
  }

  async create(payload: DifficultyCreateAdminDto) {
    const difficulty = Difficulty.create(payload as unknown as Difficulty);
    await Difficulty.save(difficulty);
    return difficulty;
  }

  async update(id: number, payload: DifficultyUpdateAdminDto) {
    const difficulty = await this.findOne(id);
    Object.assign(difficulty, payload);
    await Difficulty.save(difficulty);
    return difficulty;
  }

  async remove(id: number) {
    const difficulty = await this.findOne(id);
    await Difficulty.remove(difficulty);
    return true;
  }
}
