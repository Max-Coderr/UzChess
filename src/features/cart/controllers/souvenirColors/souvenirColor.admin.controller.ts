import { Body, Controller, Delete, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { SouvenirColorsAdminService } from '../../service/souvenirColors/souvenirColors.admin.service';
import { SouvenirColorCreateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColor.create.admin.dto';

@ApiTags('SouvenirColors - Admin')
@ApiBearerAuth()
@Controller('admin/souvenir-colors')
@UseGuards(AuthenticationGuard)
@Roles(Role.admin, Role.superAdmin)
export class SouvenirColorAdminController {
  constructor(private readonly service: SouvenirColorsAdminService) {}

  @Post()
  async addColor(@Body() payload: SouvenirColorCreateAdminDto) {
    return await this.service.addColor(payload);
  }

  @Delete(':id')
  async removeColor(@Param('id', ParseIntPipe) id: number) {
    await this.service.removeColor(id);
    return { message: 'Removed successfully' };
  }
}
