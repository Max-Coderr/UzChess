import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { BookCategoryAdminService } from '../../service/bookCategories/bookCategory.admin.service';
import { BookCategoryCreateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.update.admin.dto';
import { BookCategoryListAdminDto } from '../../dtos/bookCategories/admin/bookCategory.list.admin.dto';

@ApiTags('Book Categories - Admin')
@ApiBearerAuth()
@Controller('admin/book-categories')
@Roles(Role.admin, Role.superAdmin)
export class BookCategoryAdminController {
  constructor(private readonly service: BookCategoryAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => BookCategoryListAdminDto, isArray: true })
  async getAll() {
    const items = await this.service.findAll();
    return plainToInstance(BookCategoryListAdminDto, items, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookCategoryListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.service.findOne(id);
    return plainToInstance(BookCategoryListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Post()
  @ApiOkResponse({ type: () => BookCategoryListAdminDto })
  async create(@Body() dto: BookCategoryCreateAdminDto) {
    const item = await this.service.create(dto);
    return plainToInstance(BookCategoryListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Put(':id')
  @ApiOkResponse({ type: () => BookCategoryListAdminDto })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: BookCategoryUpdateAdminDto) {
    const item = await this.service.update(id, dto);
    return plainToInstance(BookCategoryListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.service.remove(id);
  }
}
