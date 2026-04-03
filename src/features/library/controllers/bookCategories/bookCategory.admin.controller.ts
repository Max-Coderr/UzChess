import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookCategoryListAdminDto } from '../../dtos/bookCategories/admin/bookCategory.list.admin.dto';
import { BookCategory } from '../../entities/bookCategory.entity';
import { plainToInstance } from 'class-transformer';
import { NewsDetailAdminDto } from '../../../news/dtos/news/admin/news.detail.admin.dto';
import { BookCategoryCreateAdminDto } from '../../dtos/bookCategories/admin/bookCategory.create.admin.dto';


@Controller('admin/bookCategory')
export class bookCategoryAdminController {
  @Get()
  @ApiOkResponse({type : () => BookCategoryListAdminDto})
  async getAll(){
    const bookCategory = await BookCategory.find()
    return plainToInstance(BookCategoryListAdminDto,bookCategory,{excludeExtraneousValues : true})
  }

  @Get(':id')
  @ApiOkResponse({type : () => NewsDetailAdminDto})
  async getOne(@Param('id')id: number){
    const bookCategories = await BookCategory.findOneBy(({ id : id}))
    if(!bookCategories){
      throw new NotFoundException('BookCategory with given id not found')
    }
    return bookCategories
  }

  @Post()
  async create(@Body()payload: BookCategoryCreateAdminDto){
    const bookCategories = BookCategory.create(payload as BookCategory)
    bookCategories.createdAt = (new Date()).toISOString()
    await BookCategory.save(bookCategories)
    return bookCategories
  }
}