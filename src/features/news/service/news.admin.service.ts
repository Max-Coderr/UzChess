import { Injectable } from '@nestjs/common';
import { News } from '../entities/news.entity';
import { plainToInstance } from 'class-transformer';
import { NewsListAdminDto } from '../dtos/news/admin/news.list.admin.dto';

@Injectable()
export class NewsAdminService {
  async getAll() {
    const news = await News.find();
    return plainToInstance(NewsListAdminDto, news, { excludeExtraneousValues: true });
  }
}