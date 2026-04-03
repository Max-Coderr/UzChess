import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { CourseCategoriesPublicService } from '../../service/courseCategories/course.categories.public.service';
import { CourseCategoryListPublicDto } from '../../dtos/courseCategories/public/course.category.list.public.dto';

@ApiTags('Course Categories - Public')
@ApiBearerAuth()
@Controller('public/course-categories')
@UseGuards(AuthenticationGuard)
export class CourseCategoriesPublicController {
  constructor(private readonly service: CourseCategoriesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseCategoryListPublicDto, isArray: true })
  async getAll() {
    const categories = await this.service.getAll();
    return plainToInstance(CourseCategoryListPublicDto, categories, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseCategoryListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const category = await this.service.getOne(id);
    return plainToInstance(CourseCategoryListPublicDto, category, { excludeExtraneousValues: true });
  }
}
