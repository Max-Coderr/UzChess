import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CourseReviewsPublicService } from '../../service/courseReviews/course.reviews.public.service';
import { CourseReviewListPublicDto } from '../../dtos/courseReviews/public/course.review.list.public.dto';
import { CourseReviewCreatePublicDto } from '../../dtos/courseReviews/public/course.review.create.public.dto';

@Controller('course-reviews')
export class CourseReviewsPublicController {
  constructor(private readonly service: CourseReviewsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseReviewListPublicDto, isArray: true })
  async getAll() {
    const reviews = await this.service.findAll();
    return plainToInstance(CourseReviewListPublicDto, reviews, { excludeExtraneousValues: true });
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const review = await this.service.findOne(id);
    return plainToInstance(CourseReviewListPublicDto, review, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CourseReviewCreatePublicDto) {
    return this.service.create(payload);
  }
}
