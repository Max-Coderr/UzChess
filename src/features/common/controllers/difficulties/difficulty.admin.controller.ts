import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { DifficultyAdminService } from '../../service/difficulties/difficulty.admin.service';
import { DifficultyListAdminDto } from '../../dtos/difficulties/admin/difficulty.list.admin.dto';
import { DifficultyCreateAdminDto } from '../../dtos/difficulties/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/difficulties/admin/difficulty.update.admin.dto';

@ApiTags('Difficulties - Admin')
@ApiBearerAuth()
@Controller('admin/difficulties')
@Roles(Role.admin, Role.superAdmin)
export class DifficultyAdminController {
  constructor(private readonly service: DifficultyAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => DifficultyListAdminDto, isArray: true })
  async getAll() {
    const difficulties = await this.service.findAll();
    return plainToInstance(DifficultyListAdminDto, difficulties, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => DifficultyListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const difficulty = await this.service.findOne(id);
    return plainToInstance(DifficultyListAdminDto, difficulty, { excludeExtraneousValues: true });
  }

  @Post()
  async create(@Body() payload: DifficultyCreateAdminDto) {
    return this.service.create(payload);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: DifficultyUpdateAdminDto) {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
