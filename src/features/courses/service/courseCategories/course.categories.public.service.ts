import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategory } from '../../entities/course.category.entity';

@Injectable()
export class CourseCategoriesPublicService {
  async getAll() {
    return await CourseCategory.find();
  }

  async getOne(id: number) {
    const category = await CourseCategory.findOneBy({ id });
    if (!category) {
      throw new NotFoundException('Course category with given id not found');
    }
    return category;
  }
}
