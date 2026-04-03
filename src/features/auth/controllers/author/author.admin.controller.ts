import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { AuthorAdminService } from '../../services/author/author.admin.service';
import { AuthorCreateAdminDto } from '../../dtos/author/admin/author.create.admin.dto';
import { AuthorUpdateAdminDto } from '../../dtos/author/admin/author.update.admin.dto';
import { AuthorListAdminDto } from '../../dtos/author/admin/author.list.admin.dto';

@ApiTags('Authors - Admin')
@ApiBearerAuth()
@Controller('admin/authors')
@Roles(Role.admin, Role.superAdmin)
export class AuthorAdminController {
  constructor(private readonly authorAdminService: AuthorAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => AuthorListAdminDto, isArray: true })
  async getAll() {
    const items = await this.authorAdminService.findAll();
    return plainToInstance(AuthorListAdminDto, items, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => AuthorListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.authorAdminService.findOne(id);
    return plainToInstance(AuthorListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Post()
  @ApiOkResponse({ type: () => AuthorListAdminDto })
  async create(@Body() dto: AuthorCreateAdminDto) {
    const item = await this.authorAdminService.create(dto);
    return plainToInstance(AuthorListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Put(':id')
  @ApiOkResponse({ type: () => AuthorListAdminDto })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: AuthorUpdateAdminDto) {
    const item = await this.authorAdminService.update(id, dto);
    return plainToInstance(AuthorListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.authorAdminService.remove(id);
  }
}
