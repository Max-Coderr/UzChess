import { Module } from '@nestjs/common';
import { NewsAdminController } from './controllers/news.admin.controller';
import { NewsPublicController } from './controllers/news.public.controller';

@Module({
  controllers: [NewsAdminController,NewsPublicController]
})

export class NewsModule {}