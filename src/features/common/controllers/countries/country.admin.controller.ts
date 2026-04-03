import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { CountryAdminService } from '../../service/countries/country.admin.service';
import { CountryListAdminDto } from '../../dtos/countries/admin/country.list.admin.dto';
import { CountryCreateAdminDto } from '../../dtos/countries/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../../dtos/countries/admin/country.update.admin.dto';

@ApiTags('Countries - Admin')
@ApiBearerAuth()
@Controller('admin/countries')
@Roles(Role.admin, Role.superAdmin)
export class CountryAdminController {
  constructor(private readonly service: CountryAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CountryListAdminDto, isArray: true })
  async getAll() {
    const countries = await this.service.findAll();
    return plainToInstance(CountryListAdminDto, countries, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CountryListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const country = await this.service.findOne(id);
    return plainToInstance(CountryListAdminDto, country, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: CountryCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: CountryUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
