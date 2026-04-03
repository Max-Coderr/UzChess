import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsListAdminDto } from '../dtos/news/admin/news.list.admin.dto';
import { News } from '../entities/news.entity';
import { plainToInstance } from 'class-transformer';
import { NewsDetailAdminDto } from '../dtos/news/admin/news.detail.admin.dto';

@Controller('public/news')
export class NewsPublicController {
  @Get()
  @ApiOkResponse({type : () => NewsListAdminDto, isArray : true})
  async getAll(){
    const news = await News.find()
    return plainToInstance(NewsListAdminDto,news, {excludeExtraneousValues: true})
  }

  @Get(':id')
  @ApiOkResponse({type : () => NewsDetailAdminDto})
  async getOne(@Param('id') id: number){
    const news = await News.findOneBy({ id: id });
    if(!news){
      throw new NotFoundException('News with given id not found')
    }
    return news
  }
}