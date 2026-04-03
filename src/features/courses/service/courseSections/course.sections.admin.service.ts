import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseSection } from '../../entities/course.section.entity';
import { CourseSectionCreateAdminDto } from '../../dtos/courseSection/admin/course.section.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/courseSection/admin/course.section.update.admin.dto';

@Injectable()
export class CourseSectionsAdminService {
  async findAll() {
    return await CourseSection.find();
  }

  async findOne(id: number) {
    const section = await CourseSection.findOneBy({ id });
    if (!section) throw new NotFoundException('Course section not found');
    return section;
  }

  async create(payload: CourseSectionCreateAdminDto) {
    const section = CourseSection.create(payload as unknown as CourseSection);
    await CourseSection.save(section);
    return section;
  }

  async update(id: number, payload: CourseSectionUpdateAdminDto) {
    const section = await this.findOne(id);
    Object.assign(section, payload);
    await CourseSection.save(section);
    return section;
  }

  async remove(id: number) {
    const section = await this.findOne(id);
    await CourseSection.remove(section);
    return true;
  }
}
