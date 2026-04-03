import { Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { PurchasedCoursePublicService } from '../../service/purchasedCourse/purchased.course.public.service';
import { PurchasedCourseListPublicDto } from '../../dtos/purchasedCourse/public/purchased.course.list.public.dto';

@ApiTags()
@ApiBearerAuth()
@Controller()
@UseGuards(AuthenticationGuard)
export class PurchasedCoursePublicController {
  constructor(private readonly service: PurchasedCoursePublicService) {}

  @Get()
  @ApiOkResponse({ type: () => PurchasedCourseListPublicDto, isArray: true })
  async getAll(@Req() req: any) {
    const purchased = await this.service.findAll(req.user.id);
    return plainToInstance(PurchasedCourseListPublicDto, purchased, { excludeExtraneousValues: true });
  }

  @Post(':courseId')
  async create(@Param('courseId', ParseIntPipe) courseId: number, @Req() req: any) {
    return this.service.create(courseId, req.user.id);
  }
}
