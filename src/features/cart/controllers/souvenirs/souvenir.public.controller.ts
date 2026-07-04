import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { SouvenirPublicService } from '../../service/souvenirs/souvenir.public.service';
import { SouvenirDetailPublicDto } from '../../dtos/souvenirs/public/souvenir.detail.public.dto';
import { SouvenirListPublicDto } from '../../dtos/souvenirs/public/souvenir.list.public.dto';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@ApiTags('Souvenir - Public')
@Controller('public/souvenir')
export class SouvenirPublicController {
  constructor(private readonly service: SouvenirPublicService) {}

  @Get()
  async getAll(@Query() filters: PaginationFilters) {
    const paginated = await this.service.getAll(filters);
    (paginated as any).data = plainToInstance(SouvenirListPublicDto, paginated.data, { excludeExtraneousValues: true });
    return paginated;
  }

  @Get(':id')
  @ApiOkResponse({ type: () => SouvenirDetailPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.service.getOne(id);
    return plainToInstance(SouvenirDetailPublicDto, item, { excludeExtraneousValues: true });
  }
}
