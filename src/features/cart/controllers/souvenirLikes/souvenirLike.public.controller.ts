import { Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { SouvenirLikesPublicService } from '../../service/souvenirLikes/souvenirLikes.public.service';

@ApiTags('SouvenirLikes - Public')
@ApiBearerAuth()
@Controller('public/souvenir-likes')
@UseGuards(AuthenticationGuard)
@Roles(Role.user, Role.admin, Role.superAdmin)
export class SouvenirLikePublicController {
  constructor(private readonly service: SouvenirLikesPublicService) {}

  @Get()
  async getLiked(@Req() req: any) {
    return await this.service.getLikedSouvenirs(req.user.id);
  }

  @Post(':souvenirId')
  async toggleLike(@Req() req: any, @Param('souvenirId', ParseIntPipe) souvenirId: number) {
    return await this.service.toggleLike(souvenirId, req.user.id);
  }
}
