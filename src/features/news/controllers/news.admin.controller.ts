import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Patch } from '@nestjs/common';
import { NewsCreateAdminDto } from '../dtos/news/admin/news.create.admin.dto';
import { News } from '../entities/news.entity';
import { NewsUpdateAdminDto } from '../dtos/news/admin/news.update.admin.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsListAdminDto } from '../dtos/news/admin/news.list.admin.dto';
import { NewsDetailAdminDto } from '../dtos/news/admin/news.detail.admin.dto';
import { plainToInstance } from 'class-transformer';

@Controller('admin/news')
export class NewsAdminController {
  @Get()
  @ApiOkResponse({ type: () => NewsListAdminDto, isArray: true })
  async getAll() {
    const news = await News.find();
    return plainToInstance(NewsListAdminDto, news, { excludeExtraneousValues: true });
  }

  @Get(':id')
  @ApiOkResponse({ type: () => NewsDetailAdminDto })
  async getOne(@Param('id') id: number) {
    const news = await News.findOneBy({ id: id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }
    return news;
  }

  @Post()
  async create(@Body() payload: NewsCreateAdminDto) {
    const news = News.create(payload as News);
    news.createdAt = new Date().toISOString();
    await News.save(news);
    return news;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() payload: NewsUpdateAdminDto) {
    const news = await News.findOneBy({ id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }

    Object.assign(news, Object.fromEntries(Object.entries(payload).filter(([key, value]) => value)));
    await News.save(news);
    return news;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const news = await News.findOneBy({ id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }

    await News.remove(news);
  }
}
