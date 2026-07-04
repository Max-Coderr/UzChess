import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { ColorAdminService } from '../../service/colors/color.admin.service';
import { ColorCreateAdminDto } from '../../dtos/colors/admin/color.create.admin.dto';
import { ColorUpdateAdminDto } from '../../dtos/colors/admin/color.update.admin.dto';
import { ColorListAdminDto } from '../../dtos/colors/admin/color.list.admin.dto';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@ApiTags('Colors - Admin')
@ApiBearerAuth()
@Controller('admin/colors')
@UseGuards(AuthenticationGuard)
@Roles(Role.admin, Role.superAdmin)
export class ColorAdminController {
  constructor(private readonly service: ColorAdminService) {}

  @Post()
  async create(@Body() payload: ColorCreateAdminDto) {
    const item = await this.service.create(payload);
    return plainToInstance(ColorListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Get()
  async getAll(@Query() filters: PaginationFilters) {
    const paginated = await this.service.getAll(filters);
    (paginated as any).data = plainToInstance(ColorListAdminDto, paginated.data, { excludeExtraneousValues: true });
    return paginated;
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.service.getOne(id);
    return plainToInstance(ColorListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: ColorUpdateAdminDto) {
    const item = await this.service.update(id, payload);
    return plainToInstance(ColorListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.service.delete(id);
  }
}
