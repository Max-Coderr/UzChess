import { Injectable, NotFoundException } from '@nestjs/common';
import { PurchasedCourse } from '../../entities/purchased.course.entity';

@Injectable()
export class PurchasedCourseAdminService {
  async findAll() {
    return await PurchasedCourse.find();
  }

  async findOne(id: number) {
    const purchased = await PurchasedCourse.findOneBy({ id });
    if (!purchased) throw new NotFoundException('Purchased course not found');
    return purchased;
  }

  async remove(id: number) {
    const purchased = await this.findOne(id);
    await PurchasedCourse.remove(purchased);
    return true;
  }
}
