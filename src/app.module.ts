import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CourseModule } from './features/courses/course.module';
import { CommonModule } from './features/common/common.module';
import { AuthorModule } from './features/auth/author.module';
import { NewsModule } from './features/news/news.module';
import { LibraryModule } from './features/library/library.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    CourseModule,
    CommonModule,
    AuthorModule,
    NewsModule,
    LibraryModule
})
export class AppModule {}
