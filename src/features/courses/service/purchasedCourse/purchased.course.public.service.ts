import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchasedCourse } from '../../entities/purchased.course.entity';
import { User } from '../../../auth/entities/user.entity';
import { Course } from '../../entities/course.entity';

@Injectable()
export class PurchasedCoursePublicService {
  async create(courseId: number, userId: number) {
    const user = await User.findOneBy({ id: userId });
    if (!user) throw new NotFoundException('User not found');

    const course = await Course.findOneBy({ id: courseId });
    if (!course) throw new NotFoundException('Course not found');

    const existing = await PurchasedCourse.findOneBy({ userId, courseId });
    if (existing) return existing;

    const purchased = PurchasedCourse.create({ userId, courseId });
    await PurchasedCourse.save(purchased);
    return purchased;
  }

  async findAll(userId: number) {
    return await PurchasedCourse.findBy({ userId });
  }
}
