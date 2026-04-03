import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { LanguagePublicService } from '../../service/languages/language.public.service';
import { LanguageListPublicDto } from '../../dtos/languages/public/language.list.public.dto';

@ApiTags('Languages - Public')
@ApiBearerAuth()
@Controller('public/languages')
@UseGuards(AuthenticationGuard)
export class LanguagePublicController {
  constructor(private readonly service: LanguagePublicService) {}

  @Get()
  @ApiOkResponse({ type: () => LanguageListPublicDto, isArray: true })
  async getAll() {
    const languages = await this.service.findAll();
    return plainToInstance(LanguageListPublicDto, languages, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => LanguageListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const language = await this.service.findOne(id);
    return plainToInstance(LanguageListPublicDto, language, { excludeExtraneousValues: true });
  }
}
