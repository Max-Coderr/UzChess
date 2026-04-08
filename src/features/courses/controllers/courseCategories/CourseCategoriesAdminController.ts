import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CourseCategoriesAdminService } from '../../service/courseCategories/course.categories.admin.service';
import { CourseCategoryCreateAdminDto } from '../../dtos/courseCategories/admin/course.category.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../../dtos/courseCategories/admin/course.category.update.admin.dto';

@Controller('admin/course-categories')
export class CourseCategoriesAdminController {
  constructor(private readonly service: CourseCategoriesAdminService) {}

  @Post()
  create(@Body() payload: CourseCategoryCreateAdminDto) {
    return this.service.create(payload);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: CourseCategoryUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
