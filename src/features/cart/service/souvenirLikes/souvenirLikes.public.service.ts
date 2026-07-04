import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirLike } from '../../entities/souvenir-like.entity';
import { Souvenir } from '../../entities/souvenir.entity';
import { In } from 'typeorm';

@Injectable()
export class SouvenirLikesPublicService {
  async getLikedSouvenirs(userId: number) {
    const likes = await SouvenirLike.find({ where: { userId } });
    const souvenirIds = likes.map((like) => like.souvenirId);
    if (!souvenirIds.length) {
      return [];
    }
    return await Souvenir.find({
      where: { id: In(souvenirIds) },
    });
  }

  async toggleLike(souvenirId: number, userId: number) {
    const souvenir = await Souvenir.findOneBy({ id: souvenirId });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }

    const like = await SouvenirLike.findOneBy({ userId, souvenirId });
    if (like) {
      await SouvenirLike.remove(like);
      return { message: 'Removed' };
    }

    const newLike = SouvenirLike.create({
      userId,
      souvenirId,
    } as SouvenirLike);
    await SouvenirLike.save(newLike);
    return { message: 'Liked' };
  }
}
