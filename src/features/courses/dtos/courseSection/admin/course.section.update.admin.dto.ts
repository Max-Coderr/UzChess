import { PartialType } from '@nestjs/swagger';
import { CourseSectionCreateAdminDto } from './course.section.create.admin.dto';

export class CourseSectionUpdateAdminDto extends PartialType(CourseSectionCreateAdminDto) {}
