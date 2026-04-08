import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DifficultyAdminService } from '../../service/difficulties/difficulty.admin.service';
import { DifficultyCreateAdminDto } from '../../dtos/difficulties/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/difficulties/admin/difficulty.update.admin.dto';

@Controller('admin/difficulties')
export class DifficultyAdminController {
  constructor(private readonly service: DifficultyAdminService) {}

  @Post()
  @UseInterceptors(FileInterceptor('icon'))
  create(@Body() payload: DifficultyCreateAdminDto, @UploadedFile() icon: Express.Multer.File) {
    return this.service.create(payload, icon);
  }

  @Get()
  findAll() {
    return this.service.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.getOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('icon'))
  update(
    @Param('id') id: number,
    @Body() payload: DifficultyUpdateAdminDto,
    @UploadedFile() icon: Express.Multer.File,
  ) {
    return this.service.update(id, payload, icon);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
