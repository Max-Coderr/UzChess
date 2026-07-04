import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirReview } from '../../entities/souvenir-review.entity';
import { Souvenir } from '../../entities/souvenir.entity';
import { SouvenirReviewCreatePublicDto } from '../../dtos/souvenirReviews/public/souvenirReview.create.public.dto';

@Injectable()
export class SouvenirReviewsPublicService {
  async create(payload: SouvenirReviewCreatePublicDto, userId: number) {
    const souvenir = await Souvenir.findOneBy({ id: payload.souvenirId });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }

    const review = SouvenirReview.create({
      ...payload,
      userId,
    } as SouvenirReview);
    await SouvenirReview.save(review);
    return review;
  }

  async getAllBySouvenir(souvenirId: number) {
    const souvenir = await Souvenir.findOneBy({ id: souvenirId });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }

    return await SouvenirReview.find({
      where: { souvenirId },
      order: { createdAt: 'DESC' },
    });
  }
}
