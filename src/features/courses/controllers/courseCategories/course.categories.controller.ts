import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CourseCategory } from '../../entities/course.category.entity';
import { CourseCategoryListPublicDto } from '../../dtos/courseCategories/public/course.category.list.public.dto';
import { CourseCategoryCreateAdminDto } from '../../dtos/courseCategories/admin/course.category.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../../dtos/courseCategories/admin/course.category.update.admin.dto';

@Controller()
export class CourseCategoriesController {
  @Get()
  @ApiOkResponse({ type: () => CourseCategoryListPublicDto, isArray: true })
  async getAll() {
    const categories = await CourseCategory.find();
    return plainToInstance(CourseCategoryListPublicDto, categories, { excludeExtraneousValues: true });
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const category = await CourseCategory.findOneBy({ id });

    if (!category) {
      throw new NotFoundException('Course category with given id not found');
    }

    return category;
  }

  @Post()
  async create(@Body() payload: CourseCategoryCreateAdminDto) {
    const category = CourseCategory.create(payload as CourseCategory);
    await CourseCategory.save(category);
    return category;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() payload: CourseCategoryUpdateAdminDto) {
    const category = await CourseCategory.findOneBy({ id });

    if (!category) {
      throw new NotFoundException('Course category with given id not found');
    }

    Object.assign(category, payload);
    await CourseCategory.save(category);
    return category;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const category = await CourseCategory.findOneBy({ id });

    if (!category) {
      throw new NotFoundException('Course category with given id not found');
    }

    await CourseCategory.remove(category);
  }
}
