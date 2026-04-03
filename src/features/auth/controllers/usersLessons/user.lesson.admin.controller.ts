import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { UserLessonAdminService } from '../../services/usersLessons/user.lesson.admin.service';
import { UserLessonListAdminDto } from '../../dtos/usersLessons/admin/userlesson.list.admin.dto';

@ApiTags('Users Lessons - Admin')
@ApiBearerAuth()
@Controller('admin/users-lessons')
@Roles(Role.admin, Role.superAdmin)
export class UserLessonAdminController {
  constructor(private readonly service: UserLessonAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => UserLessonListAdminDto, isArray: true })
  async getAll() {
    const items = await this.service.findAll();
    return plainToInstance(UserLessonListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  @Get('user/:userId')
  @ApiOkResponse({ type: () => UserLessonListAdminDto, isArray: true })
  async getByUser(@Param('userId', ParseIntPipe) userId: number) {
    const items = await this.service.findAllByUser(userId);
    return plainToInstance(UserLessonListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }
}
