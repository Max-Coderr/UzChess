import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Report } from '../../entities/report.entity';
import { ReportCategory } from '../../entities/report-category.entity';
import { ReportCreatePublicDto } from '../../dtos/report/public/report.create.public.dto';
import { User } from '../../../auth/entities/user.entity';

@Injectable()
export class ReportPublicService {
  async create(userId: number, payload: ReportCreatePublicDto) {
    const user = await User.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User does not exist anymore');
    }

    const category = await ReportCategory.findOneBy({ id: payload.categoryId });
    if (!category) {
      throw new NotFoundException('Report category not found');
    }

    const existing = await Report.findOneBy({
      userId,
      target: payload.target,
      targetId: payload.targetId,
      categoryId: payload.categoryId,
    });

    if (existing) {
      throw new ConflictException('Report already exists');
    }

    const report = Report.create({ ...payload, userId } as Report);
    await Report.save(report);
    return report;
  }
}
