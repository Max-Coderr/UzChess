import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseSection } from '../../entities/course.section.entity';

@Injectable()
export class CourseSectionsPublicService {
  async findAll() {
    return await CourseSection.find();
  }

  async findOne(id: number) {
    const section = await CourseSection.findOneBy({ id });
    if (!section) throw new NotFoundException('Course section not found');
    return section;
  }
}
