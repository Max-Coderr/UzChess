import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { LanguageAdminService } from '../../service/languages/language.admin.service';
import { LanguageListAdminDto } from '../../dtos/languages/admin/language.list.admin.dto';
import { LanguageCreateAdminDto } from '../../dtos/languages/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/languages/admin/language.update.admin.dto';

@ApiTags('Languages - Admin')
@ApiBearerAuth()
@Controller('admin/languages')
@Roles(Role.admin, Role.superAdmin)
export class LanguageAdminController {
  constructor(private readonly service: LanguageAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => LanguageListAdminDto, isArray: true })
  async getAll() {
    const languages = await this.service.findAll();
    return plainToInstance(LanguageListAdminDto, languages, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => LanguageListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const language = await this.service.findOne(id);
    return plainToInstance(LanguageListAdminDto, language, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: LanguageCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: LanguageUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
