import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseReview } from '../../entities/course.review.entity';
import { CourseReviewCreateAdminDto } from '../../dtos/courseReviews/admin/course.review.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../../dtos/courseReviews/admin/course.review.update.admin.dto';

@Injectable()
export class CourseReviewsAdminService {
  async findAll() {
    return await CourseReview.find();
  }

  async findOne(id: number) {
    const review = await CourseReview.findOneBy({ id });
    if (!review) throw new NotFoundException('Course review not found');
    return review;
  }

  async create(payload: CourseReviewCreateAdminDto) {
    const review = CourseReview.create(payload as unknown as CourseReview);
    await CourseReview.save(review);
    return review;
  }

  async update(id: number, payload: CourseReviewUpdateAdminDto) {
    const review = await this.findOne(id);
    Object.assign(review, payload);
    await CourseReview.save(review);
    return review;
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    await CourseReview.remove(review);
    return true;
  }
}
