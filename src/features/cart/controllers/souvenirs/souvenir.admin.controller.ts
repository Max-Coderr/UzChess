import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { SouvenirAdminService } from '../../service/souvenirs/souvenir.admin.service';
import { SouvenirCreateAdminDto } from '../../dtos/souvenirs/admin/souvenir.create.admin.dto';
import { SouvenirUpdateAdminDto } from '../../dtos/souvenirs/admin/souvenir.update.admin.dto';
import { SouvenirListAdminDto } from '../../dtos/souvenirs/admin/souvenir.list.admin.dto';
import { SouvenirDetailAdminDto } from '../../dtos/souvenirs/admin/souvenir.detail.admin.dto';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@ApiTags('Souvenir - Admin')
@ApiBearerAuth()
@Controller('admin/souvenir')
@UseGuards(AuthenticationGuard)
@Roles(Role.admin, Role.superAdmin)
export class SouvenirAdminController {
  constructor(private readonly service: SouvenirAdminService) {}

  @Post()
  async create(@Body() payload: SouvenirCreateAdminDto) {
    const item = await this.service.create(payload);
    return plainToInstance(SouvenirListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Get()
  @ApiOkResponse({ type: () => SouvenirListAdminDto, isArray: true })
  async getAll(@Query() filters: PaginationFilters) {
    const paginated = await this.service.getAll(filters);
    (paginated as any).data = plainToInstance(SouvenirListAdminDto, paginated.data, { excludeExtraneousValues: true });
    return paginated;
  }

  @Get(':id')
  @ApiOkResponse({ type: () => SouvenirDetailAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.service.getOne(id);
    return plainToInstance(SouvenirDetailAdminDto, item, { excludeExtraneousValues: true });
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: SouvenirUpdateAdminDto) {
    const item = await this.service.update(id, payload);
    return plainToInstance(SouvenirListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.service.delete(id);
  }
}
