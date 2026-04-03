import { Controller, Delete, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { CourseLikesPublicService } from '../../service/courseLikes/course.likes.public.service';

@ApiTags('Course Likes - Public')
@ApiBearerAuth()
@Controller('public/course-likes')
@UseGuards(AuthenticationGuard)
export class CourseLikesPublicController {
  constructor(private readonly service: CourseLikesPublicService) {}

  @Post(':courseId')
  async create(@Param('courseId', ParseIntPipe) courseId: number, @Req() req: any) {
    return this.service.create(courseId, req.user.id);
  }

  @Delete(':courseId')
  async remove(@Param('courseId', ParseIntPipe) courseId: number, @Req() req: any) {
    return this.service.remove(courseId, req.user.id);
  }
}
