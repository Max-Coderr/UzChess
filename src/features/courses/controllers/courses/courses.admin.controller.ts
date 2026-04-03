import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { CourseSectionsAdminService } from '../../service/courseSections/course.sections.admin.service';
import { CourseSectionListAdminDto } from '../../dtos/courseSection/admin/course.section.list.admin.dto';
import { CourseSectionCreateAdminDto } from '../../dtos/courseSection/admin/course.section.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/courseSection/admin/course.section.update.admin.dto';

@ApiTags()
@ApiBearerAuth()
@Controller()
@Roles(Role.admin, Role.superAdmin)
export class CoursesAdminController {
  constructor(private readonly service: CourseSectionsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseSectionListAdminDto, isArray: true })
  async getAll() {
    const sections = await this.service.findAll();
    return plainToInstance(CourseSectionListAdminDto, sections, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseSectionListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const section = await this.service.findOne(id);
    return plainToInstance(CourseSectionListAdminDto, section, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CourseSectionCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: CourseSectionUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
