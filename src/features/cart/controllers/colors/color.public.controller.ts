import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { ColorPublicService } from '../../service/colors/color.public.service';
import { ColorListPublicDto } from '../../dtos/colors/public/color.list.public.dto';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@ApiTags('Colors - Public')
@Controller('public/colors')
export class ColorPublicController {
  constructor(private readonly service: ColorPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => ColorListPublicDto, isArray: true })
  async getAll(@Query() filters: PaginationFilters) {
    const paginated = await this.service.getAll(filters);
    (paginated as any).data = plainToInstance(ColorListPublicDto, paginated.data, { excludeExtraneousValues: true });
    return paginated;
  }
}
