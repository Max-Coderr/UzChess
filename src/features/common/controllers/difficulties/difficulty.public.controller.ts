import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { DifficultyPublicService } from '../../service/difficulties/difficulty.public.service';
import { DifficultyListPublicDto } from '../../dtos/difficulties/public/difficulty.list.public.dto';

@ApiTags('Difficulties - Public')
@ApiBearerAuth()
@Controller('public/difficulties')
@UseGuards(AuthenticationGuard)
export class DifficultyPublicController {
  constructor(private readonly service: DifficultyPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => DifficultyListPublicDto, isArray: true })
  async getAll() {
    const difficulties = await this.service.findAll();
    return plainToInstance(DifficultyListPublicDto, difficulties, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => DifficultyListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const difficulty = await this.service.findOne(id);
    return plainToInstance(DifficultyListPublicDto, difficulty, { excludeExtraneousValues: true });
  }
}
