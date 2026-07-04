import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportCategory } from '../../entities/report-category.entity';
import { ReportCategoryCreateAdminDto } from '../../dtos/report-categories/admin/report-category.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../../dtos/report-categories/admin/report-category.update.admin.dto';

@Injectable()
export class ReportCategoryAdminService {
  async create(payload: ReportCategoryCreateAdminDto) {
    const item = ReportCategory.create(payload as ReportCategory);
    await ReportCategory.save(item);
    return item;
  }

  async getAll() {
    return ReportCategory.find({ order: { id: 'ASC' } });
  }

  async getOne(id: number) {
    const item = await ReportCategory.findOneBy({ id });
    if (!item) throw new NotFoundException('Report category not found');
    return item;
  }

  async update(id: number, payload: ReportCategoryUpdateAdminDto) {
    const item = await this.getOne(id);
    Object.assign(item, payload);
    await ReportCategory.save(item);
    return item;
  }

  async delete(id: number) {
    const item = await this.getOne(id);
    await ReportCategory.remove(item);
    return true;
  }
}
