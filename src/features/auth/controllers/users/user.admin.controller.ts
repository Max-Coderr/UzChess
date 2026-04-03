import { Body, Controller, Delete, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { UserAdminService } from '../../services/users/user.admin.service';
import { UserUpdateAdminDto } from '../../dtos/users/admin/user.update.admin.dto';
import { UserListAdminDto } from '../../dtos/users/admin/user.list.admin.dto';

@ApiTags('Users - Admin')
@ApiBearerAuth()
@Controller('admin/users')
@Roles(Role.admin, Role.superAdmin)
export class UserAdminController {
  constructor(private readonly service: UserAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => UserListAdminDto, isArray: true })
  async getAll() {
    const items = await this.service.findAll();
    return plainToInstance(UserListAdminDto, items, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => UserListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.service.findOne(id);
    return plainToInstance(UserListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Put(':id')
  @ApiOkResponse({ type: () => UserListAdminDto })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UserUpdateAdminDto) {
    const item = await this.service.update(id, dto);
    return plainToInstance(UserListAdminDto, item, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.service.remove(id);
  }
}
