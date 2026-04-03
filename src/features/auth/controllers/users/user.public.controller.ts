import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { UserPublicService } from '../../services/users/user.public.service';
import { UserUpdatePublicDto } from '../../dtos/users/public/user.update.public.dto';
import { UserDetailPublicDto } from '../../dtos/users/public/user.detail.public.dto';

@ApiTags('Users - Public')
@ApiBearerAuth()
@Controller('public/users')
@UseGuards(AuthenticationGuard)
export class UserPublicController {
  constructor(private readonly service: UserPublicService) {}

  @Get('me')
  @ApiOkResponse({ type: () => UserDetailPublicDto })
  async getMe(@Request() req) {
    const item = await this.service.findOne(req.user.id);
    return plainToInstance(UserDetailPublicDto, item, { excludeExtraneousValues: true });
  }

  @Put('me')
  @ApiOkResponse({ type: () => UserDetailPublicDto })
  async updateMe(@Request() req, @Body() dto: UserUpdatePublicDto) {
    const item = await this.service.update(req.user.id, dto);
    return plainToInstance(UserDetailPublicDto, item, { excludeExtraneousValues: true });
  }
}
