import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLesson } from '../../entities/course.lesson.entity';
import { CourseLessonCreateAdminDto } from '../../dtos/courseLessons/admin/course.lesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../../dtos/courseLessons/admin/course.lesson.update.admin.dto';

@Injectable()
export class CourseLessonsAdminService {
  async findAll() {
    return await CourseLesson.find();
  }

  async findOne(id: number) {
    const lesson = await CourseLesson.findOneBy({ id });
    if (!lesson) throw new NotFoundException('Course lesson not found');
    return lesson;
  }

  async create(payload: CourseLessonCreateAdminDto) {
    const lesson = CourseLesson.create(payload as unknown as CourseLesson);
    await CourseLesson.save(lesson);
    return lesson;
  }

  async update(id: number, payload: CourseLessonUpdateAdminDto) {
    const lesson = await this.findOne(id);
    Object.assign(lesson, payload);
    await CourseLesson.save(lesson);
    return lesson;
  }

  async remove(id: number) {
    const lesson = await this.findOne(id);
    await CourseLesson.remove(lesson);
    return true;
  }
}
