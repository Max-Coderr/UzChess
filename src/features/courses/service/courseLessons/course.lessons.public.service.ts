import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLesson } from '../../entities/course.lesson.entity';

@Injectable()
export class CourseLessonsPublicService {
  async findAll() {
    return await CourseLesson.find();
  }

  async findOne(id: number) {
    const lesson = await CourseLesson.findOneBy({ id });
    if (!lesson) throw new NotFoundException('Course lesson not found');
    return lesson;
  }
}
