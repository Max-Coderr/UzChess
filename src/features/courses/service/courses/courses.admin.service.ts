import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from '../../entities/course.entity';

@Injectable()
export class CoursesAdminService {
  async findAll() {
    return await Course.find();
  }

  async findOne(id: number) {
    const course = await Course.findOneBy({ id });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }
}
