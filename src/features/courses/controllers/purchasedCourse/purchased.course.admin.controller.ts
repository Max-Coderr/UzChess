import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { PurchasedCourseAdminService } from '../../service/purchasedCourse/purchased.course.admin.service';
import { PurchasedCourseListAdminDto } from '../../dtos/purchasedCourse/admin/purchased.course.list.admin.dto';

@ApiTags('Purchased Courses - Admin')
@ApiBearerAuth()
@Controller('admin/purchased-courses')
@Roles(Role.admin, Role.superAdmin)
export class PurchasedCourseAdminController {
  constructor(private readonly service: PurchasedCourseAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => PurchasedCourseListAdminDto, isArray: true })
  async getAll() {
    const purchased = await this.service.findAll();
    return plainToInstance(PurchasedCourseListAdminDto, purchased, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
