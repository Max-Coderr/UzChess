import { PartialType } from '@nestjs/swagger';
import { CourseLessonCreateAdminDto } from './course.lesson.create.admin.dto';

export class CourseLessonUpdateAdminDto extends PartialType(CourseLessonCreateAdminDto) {}
