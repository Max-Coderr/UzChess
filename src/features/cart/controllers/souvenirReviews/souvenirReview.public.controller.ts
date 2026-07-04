import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { SouvenirReviewsPublicService } from '../../service/souvenirReviews/souvenirReviews.public.service';
import { SouvenirReviewCreatePublicDto } from '../../dtos/souvenirReviews/public/souvenirReview.create.public.dto';
import { SouvenirReviewListPublicDto } from '../../dtos/souvenirReviews/public/souvenirReview.list.public.dto';

@ApiTags('SouvenirReviews - Public')
@Controller('public/souvenir-reviews')
export class SouvenirReviewPublicController {
  constructor(private readonly service: SouvenirReviewsPublicService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  @Roles(Role.user, Role.admin, Role.superAdmin)
  async create(@Req() req: any, @Body() payload: SouvenirReviewCreatePublicDto) {
    const item = await this.service.create(payload, req.user.id);
    return plainToInstance(SouvenirReviewListPublicDto, item, { excludeExtraneousValues: true });
  }

  @Get(':souvenirId')
  @ApiOkResponse({ type: () => SouvenirReviewListPublicDto, isArray: true })
  async getAllBySouvenir(@Param('souvenirId', ParseIntPipe) souvenirId: number) {
    const items = await this.service.getAllBySouvenir(souvenirId);
    return plainToInstance(SouvenirReviewListPublicDto, items, { excludeExtraneousValues: true });
  }
}
