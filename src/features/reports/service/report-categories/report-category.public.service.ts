import { Injectable } from '@nestjs/common';
import { ReportCategory } from '../../entities/report-category.entity';

@Injectable()
export class ReportCategoryPublicService {
  async getAll() {
    return ReportCategory.find({ order: { id: 'ASC' } });
  }
}
