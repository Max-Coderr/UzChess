import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CourseReviewsAdminService } from '../../service/courseReviews/course.reviews.admin.service';
import { CourseReviewListAdminDto } from '../../dtos/courseReviews/admin/course.review.list.admin.dto';
import { CourseReviewDetailAdminDto } from '../../dtos/courseReviews/admin/course.review.detail.admin.dto';
import { CourseReviewCreateAdminDto } from '../../dtos/courseReviews/admin/course.review.create.admin.dto';
import { CourseReviewUpdateAdminDto } from '../../dtos/courseReviews/admin/course.review.update.admin.dto';

@Controller('admin/course-reviews')
export class CourseReviewsAdminController {
  constructor(private readonly service: CourseReviewsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseReviewListAdminDto, isArray: true })
  async getAll() {
    const reviews = await this.service.findAll();
    return plainToInstance(CourseReviewListAdminDto, reviews, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseReviewDetailAdminDto })
  async getOne(@Param('id') id: number) {
    const review = await this.service.findOne(id);
    return plainToInstance(CourseReviewDetailAdminDto, review, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CourseReviewCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() payload: CourseReviewUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
