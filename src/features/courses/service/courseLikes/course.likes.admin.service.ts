import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseLike } from '../../entities/course.like.entity';

@Injectable()
export class CourseLikesAdminService {
  async findAll() {
    return await CourseLike.find();
  }

  async remove(id: number) {
    const like = await CourseLike.findOneBy({ id });
    if (!like) throw new NotFoundException('Course like not found');
    await CourseLike.remove(like);
    return true;
  }
}
