import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { ReportCategory } from './entities/report-category.entity';
import { ReportPublicService } from './service/report/report.public.service';
import { ReportCategoryPublicService } from './service/report-categories/report-category.public.service';
import { ReportCategoryAdminService } from './service/report-categories/report-category.admin.service';
import { ReportPublicController } from './controllers/report/report.public.controller';
import { ReportCategoryPublicController } from './controllers/report-categories/report-category.public.controller';
import { ReportCategoryAdminController } from './controllers/report-categories/report-category.admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Report, ReportCategory])],
  controllers: [ReportPublicController, ReportCategoryPublicController, ReportCategoryAdminController],
  providers: [ReportPublicService, ReportCategoryPublicService, ReportCategoryAdminService],
})
export class ReportsModule {}
