import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReportCategoryPublicService } from '../../service/report-categories/report-category.public.service';

@ApiTags('Reports Categories - Public')
@Controller('public/report-categories')
export class ReportCategoryPublicController {
  constructor(private readonly service: ReportCategoryPublicService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
