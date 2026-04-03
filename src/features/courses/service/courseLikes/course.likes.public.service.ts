import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLike } from '../../entities/course.like.entity';
import { User } from '../../../auth/entities/user.entity';
import { Course } from '../../entities/course.entity';

@Injectable()
export class CourseLikesPublicService {
  async create(courseId: number, userId: number) {
    const user = await User.findOneBy({ id: userId });
    if (!user) throw new NotFoundException('User not found');

    const course = await Course.findOneBy({ id: courseId });
    if (!course) throw new NotFoundException('Course not found');

    const existing = await CourseLike.findOneBy({ userId, courseId });
    if (existing) return existing;

    const like = CourseLike.create({ userId, courseId });
    await CourseLike.save(like);
    return like;
  }

  async remove(courseId: number, userId: number) {
    const like = await CourseLike.findOneBy({ userId, courseId });
    if (!like) throw new NotFoundException('Like not found');
    await CourseLike.remove(like);
    return true;
  }
}
