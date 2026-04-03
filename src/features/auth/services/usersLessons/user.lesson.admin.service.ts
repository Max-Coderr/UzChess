import { Injectable } from '@nestjs/common';
import { UserLesson } from '../../entities/users.lesson.entity';

@Injectable()
export class UserLessonAdminService {
  async findAll(): Promise<UserLesson[]> {
    return UserLesson.find();
  }

  async findAllByUser(userId: number): Promise<UserLesson[]> {
    return UserLesson.findBy({ userId });
  }
}
