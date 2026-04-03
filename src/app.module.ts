import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { NewsModule } from './features/news/news.module';
// import { BookCategoryModule } from './features/library/controllers/bookCategories/bookCategory.module';
// import { CountryModule } from './features/common/countries/country.module';
// import { DifficultyModule } from './features/common/difficulties1/difficulty.module';
import { AuthorModule } from './features/auth/author.module';
import { CourseModule } from './features/courses/course.module';
import { CommonModule } from './features/common/common.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    NewsModule,
    CourseModule,
    CommonModule,
    AuthorModule,
  ],
})
export class AppModule {}
