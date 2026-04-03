import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { UseGuards } from '@nestjs/common';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { CourseCategoriesAdminService } from '../../service/courseCategories/course.categories.admin.service';
import { CourseCategoryListAdminDto } from '../../dtos/courseCategories/admin/course.category.list.admin.dto';
import { CourseCategoryCreateAdminDto } from '../../dtos/courseCategories/admin/course.category.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../../dtos/courseCategories/admin/course.category.update.admin.dto';

@ApiTags('Course Categories - Admin')
@ApiBearerAuth()
@Controller('admin/course-categories')
@Roles(Role.admin, Role.superAdmin)
export class CourseCategoriesAdminController {
  constructor(private readonly service: CourseCategoriesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto, isArray: true })
  async getAll() {
    const categories = await this.service.getAll();
    return plainToInstance(CourseCategoryListAdminDto, categories, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const category = await this.service.getOne(id);
    return plainToInstance(CourseCategoryListAdminDto, category, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CourseCategoryCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async updateOne(@Param('id', ParseIntPipe) id: number, @Body() payload: CourseCategoryUpdateAdminDto) {
    return this.service.updateOne(id, payload);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteOne(id);
  }
}
