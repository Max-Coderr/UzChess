import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { CourseSectionsPublicService } from '../../service/courseSections/course.sections.public.service';
import { CourseSectionListPublicDto } from '../../dtos/courseSection/public/course.section.list.public';

@ApiTags('Course Sections - Public')
@ApiBearerAuth()
@Controller('public/course-sections')
@UseGuards(AuthenticationGuard)
export class CourseSectionsPublicController {
  constructor(private readonly service: CourseSectionsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseSectionListPublicDto, isArray: true })
  async getAll() {
    const sections = await this.service.findAll();
    return plainToInstance(CourseSectionListPublicDto, sections, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseSectionListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const section = await this.service.findOne(id);
    return plainToInstance(CourseSectionListPublicDto, section, { excludeExtraneousValues: true });
  }
}
