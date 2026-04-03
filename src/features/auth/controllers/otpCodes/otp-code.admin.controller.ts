import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { OtpCodeAdminService } from '../../services/otpCodes/otp-code.admin.service';
import { OtpCodeListAdminDto } from '../../dtos/otpCodes/admin/otp-code.list.admin.dto';

@ApiTags('OTP Codes - Admin')
@ApiBearerAuth()
@Controller('admin/otp-codes')
@Roles(Role.admin, Role.superAdmin)
export class OtpCodeAdminController {
  constructor(private readonly otpCodeAdminService: OtpCodeAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => OtpCodeListAdminDto, isArray: true })
  async getAll() {
    const items = await this.otpCodeAdminService.findAll();
    return plainToInstance(OtpCodeListAdminDto, items, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => OtpCodeListAdminDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.otpCodeAdminService.findOne(id);
    return plainToInstance(OtpCodeListAdminDto, item, {
      excludeExtraneousValues: true,
    });
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.otpCodeAdminService.remove(id);
  }
}
