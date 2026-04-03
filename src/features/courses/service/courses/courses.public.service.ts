import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseReview } from '../../entities/course.review.entity';
import { CourseReviewCreatePublicDto } from '../../dtos/courseReviews/public/course.review.create.public.dto';

@Injectable()
export class CoursesPublicService {
  async findAll() {
    return await CourseReview.find();
  }

  async findOne(id: number) {
    const review = await CourseReview.findOneBy({ id });
    if (!review) throw new NotFoundException('Course review not found');
    return review;
  }

  async create(payload: CourseReviewCreatePublicDto) {
    const review = CourseReview.create(payload as unknown as CourseReview);
    await CourseReview.save(review);
    return review;
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    await CourseReview.remove(review);
    return true;
  }
}
