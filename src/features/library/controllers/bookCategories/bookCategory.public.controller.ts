import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { BookCategoryPublicService } from '../../service/bookCategories/bookCategory.public.service';
import { BookCategoryListPublicDto } from '../../dtos/bookCategories/public/bookCategory.list.public.dto';

@ApiTags('Book Categories - Public')
@ApiBearerAuth()
@Controller('public/book-categories')
@UseGuards(AuthenticationGuard)
export class BookCategoryPublicController {
  constructor(private readonly service: BookCategoryPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => BookCategoryListPublicDto, isArray: true })
  async getAll() {
    const items = await this.service.findAll();
    return plainToInstance(BookCategoryListPublicDto, items, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookCategoryListPublicDto })
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await this.service.findOne(id);
    return plainToInstance(BookCategoryListPublicDto, item, { excludeExtraneousValues: true });
  }
}
