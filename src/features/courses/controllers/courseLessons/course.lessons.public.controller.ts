import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { CourseReviewsPublicService } from '../../service/courseReviews/course.reviews.public.service';
import { CourseReviewListPublicDto } from '../../dtos/courseReviews/public/course.review.list.public.dto';
import { CourseReviewCreatePublicDto } from '../../dtos/courseReviews/public/course.review.create.public.dto';

@ApiTags('Course Reviews - Public')
@ApiBearerAuth()
@Controller('public/course-reviews')
@UseGuards(AuthenticationGuard)
export class CourseLessonsPublicController {
  constructor(private readonly service: CourseReviewsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseReviewListPublicDto, isArray: true })
  async getAll() {
    const reviews = await this.service.findAll();
    return plainToInstance(CourseReviewListPublicDto, reviews, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseReviewListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const review = await this.service.findOne(id);
    return plainToInstance(CourseReviewListPublicDto, review, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CourseReviewCreatePublicDto) {
    return this.service.create(payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
