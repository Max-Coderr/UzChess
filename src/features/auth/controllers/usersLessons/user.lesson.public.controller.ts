import { Body, Controller, Get, Param, ParseIntPipe, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { UserLessonPublicService } from '../../services/usersLessons/user.lesson.public.service';
import { UserLessonUpsertPublicDto } from '../../dtos/usersLessons/public/user.lesson.public.dto';
import { UserLessonListPublicDto } from '../../dtos/usersLessons/public/user.lesson.list.public.dto';

@ApiTags('Users Lessons - Public')
@ApiBearerAuth()
@Controller('public/users-lessons')
@UseGuards(AuthenticationGuard)
export class UserLessonPublicController {
  constructor(private readonly service: UserLessonPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => UserLessonListPublicDto, isArray: true })
  async getMyLessons(@Request() req) {
    const items = await this.service.findAllForUser(req.user.id);
    return plainToInstance(UserLessonListPublicDto, items, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':lessonId')
  @ApiOkResponse({ type: () => UserLessonListPublicDto })
  async getOne(@Request() req, @Param('lessonId', ParseIntPipe) lessonId: number) {
    const item = await this.service.findOne(req.user.id, lessonId);
    return plainToInstance(UserLessonListPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }

  @Put()
  @ApiOkResponse({ type: () => UserLessonListPublicDto })
  async upsert(@Request() req, @Body() dto: UserLessonUpsertPublicDto) {
    const item = await this.service.upsert(req.user.id, dto);
    return plainToInstance(UserLessonListPublicDto, item, {
      excludeExtraneousValues: true,
    });
  }
}
