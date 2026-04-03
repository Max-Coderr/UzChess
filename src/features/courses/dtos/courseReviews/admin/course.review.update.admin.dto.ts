import { PartialType } from '@nestjs/swagger';
import { CourseReviewCreateAdminDto } from './course.review.create.admin.dto';

export class CourseReviewUpdateAdminDto extends PartialType(CourseReviewCreateAdminDto) {}  
