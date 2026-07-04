import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { ReportCategoryAdminService } from '../../service/report-categories/report-category.admin.service';
import { ReportCategoryCreateAdminDto } from '../../dtos/report-categories/admin/report-category.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../../dtos/report-categories/admin/report-category.update.admin.dto';

@ApiTags('Reports Categories - Admin')
@ApiBearerAuth()
@Controller('admin/report-categories')
@UseGuards(AuthenticationGuard)
@Roles(Role.admin, Role.superAdmin)
export class ReportCategoryAdminController {
  constructor(private readonly service: ReportCategoryAdminService) {}

  @Post()
  create(@Body() payload: ReportCategoryCreateAdminDto) {
    return this.service.create(payload);
  }

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.getOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: ReportCategoryUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
