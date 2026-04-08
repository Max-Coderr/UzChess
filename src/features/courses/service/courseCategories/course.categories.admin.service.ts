import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategory } from '../../entities/course.category.entity';

@Injectable()
export class CourseCategoriesAdminService {
  async create(payload: any) {
    const category = CourseCategory.create(payload as CourseCategory);
    await CourseCategory.save(category);
    return category;
  }

  async findAll() {
    return CourseCategory.find();
  }

  async findOne(id: number) {
    const category = await CourseCategory.findOneBy({ id });
    if (!category) {
      throw new NotFoundException('Course category with given id not found');
    }
    return category;
  }

  async update(id: number, payload: any) {
    const category = await this.findOne(id);
    Object.assign(category, payload);
    await CourseCategory.save(category);
    return category;
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    await CourseCategory.remove(category);
  }
}
