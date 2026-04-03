import { PartialType } from '@nestjs/swagger';
import { CourseCreateAdminDto } from './course.create.admin.dto';

export class CourseUpdateAdminDto extends PartialType(CourseCreateAdminDto) {}
