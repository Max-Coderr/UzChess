import { Injectable, NotFoundException } from '@nestjs/common';
import { Difficulty } from '../../entities/difficulty.entity';

@Injectable()
export class DifficultyPublicService {
  async findAll() {
    return await Difficulty.find();
  }

  async findOne(id: number) {
    const difficulty = await Difficulty.findOneBy({ id });
    if (!difficulty) throw new NotFoundException('Difficulty not found');
    return difficulty;
  }
}
