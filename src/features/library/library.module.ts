import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BookCategoryAdminController } from './controllers/bookCategories/bookCategory.admin.controller';
import { BookCategoryPublicController } from './controllers/bookCategories/bookCategory.public.controller';
import { BookCategoryAdminService } from './service/bookCategories/bookCategory.admin.service';
import { BookCategoryPublicService } from './service/bookCategories/bookCategory.public.service';

@Module({
  imports: [JwtModule],
  controllers: [BookCategoryAdminController, BookCategoryPublicController],
  providers: [BookCategoryAdminService, BookCategoryPublicService],
})
export class BookModule {}
