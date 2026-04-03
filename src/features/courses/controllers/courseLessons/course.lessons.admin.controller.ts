import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { CourseReviewsAdminService } from '../../service/courseReviews/course.reviews.admin.service';
import { CourseReviewListAdminDto } from '../../dtos/courseReviews/admin/course.review.list.admin.dto';
import { CourseReviewDetailAdminDto } from '../../dtos/courseReviews/admin/course.review.detail.admin.dto';
import { CourseReviewCreateAdminDto } from '../../dtos/courseReviews/admin/course.review.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../../dtos/courseReviews/admin/course.review.update.admin.dto';

@ApiTags('Course Reviews - Admin')
@ApiBearerAuth()
@Controller('admin/course-reviews')
@Roles(Role.admin, Role.superAdmin)
export class CourseLessonsAdminController {
  constructor(private readonly service: CourseReviewsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseReviewListAdminDto, isArray: true })
  async getAll() {
    const reviews = await this.service.findAll();
    return plainToInstance(CourseReviewListAdminDto, reviews, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseReviewDetailAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const review = await this.service.findOne(id);
    return plainToInstance(CourseReviewDetailAdminDto, review, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CourseReviewCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: CourseReviewUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
