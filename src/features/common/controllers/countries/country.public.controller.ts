import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { CountryPublicService } from '../../service/countries/country.public.service';
import { CountryListPublicDto } from '../../dtos/countries/public/country.list.public.dto';

@ApiTags('Countries - Public')
@ApiBearerAuth()
@Controller('public/countries')
@UseGuards(AuthenticationGuard)
export class CountryPublicController {
  constructor(private readonly service: CountryPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CountryListPublicDto, isArray: true })
  async getAll() {
    const countries = await this.service.findAll();
    return plainToInstance(CountryListPublicDto, countries, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CountryListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const country = await this.service.findOne(id);
    return plainToInstance(CountryListPublicDto, country, { excludeExtraneousValues: true });
  }
}
