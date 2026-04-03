import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { CourseLikesAdminService } from '../../service/courseLikes/course.likes.admin.service';
import { CourseLikeListAdminDto } from '../../dtos/courseLikes/admin/course.like.list.admin.dto';

@ApiTags('Course Likes - Admin')
@ApiBearerAuth()
@Controller('Admin/course-likes')
@Roles(Role.admin, Role.superAdmin)
export class CourseLikesAdminController {
  constructor(private readonly service: CourseLikesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseLikeListAdminDto, isArray: true })
  async getAll() {
    const likes = await this.service.findAll();
    return plainToInstance(CourseLikeListAdminDto, likes, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
