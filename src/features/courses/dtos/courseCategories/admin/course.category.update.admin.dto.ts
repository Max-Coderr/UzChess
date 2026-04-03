import { PartialType } from '@nestjs/swagger';
import { CourseCategoryCreateAdminDto } from './course.category.create.admin.dto';

export class CourseCategoryUpdateAdminDto extends PartialType(CourseCategoryCreateAdminDto) {}
