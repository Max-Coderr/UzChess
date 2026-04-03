import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategory } from '../../entities/course.category.entity';


@Injectable()
export class CourseCategoriesAdminService {
  async create(payload: any) {
    const category = CourseCategory.create(payload);
    await CourseCategory.save(category);
    return category;
  }

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

  async updateOne(id: number, payload: any) {
    const category = await this.getOne(id);
    Object.assign(category, payload);
    await CourseCategory.save(category);
    return category;
  }

  async deleteOne(id: number) {
    const category = await this.getOne(id);
    await CourseCategory.remove(category);
    return true;
  }
}
