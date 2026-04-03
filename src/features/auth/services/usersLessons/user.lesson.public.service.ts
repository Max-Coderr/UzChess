import { Injectable, NotFoundException } from '@nestjs/common';
import { UserLesson } from '../../entities/users.lesson.entity';
import { UserLessonUpsertPublicDto } from '../../dtos/usersLessons/public/user.lesson.public.dto';

@Injectable()
export class UserLessonPublicService {
  async findAllForUser(userId: number): Promise<UserLesson[]> {
    return UserLesson.findBy({ userId });
  }

  async upsert(userId: number, payload: UserLessonUpsertPublicDto): Promise<UserLesson> {
    let record = await UserLesson.findOneBy({
      userId,
      courseLessonId: payload.courseLessonId,
    });

    if (!record) {
      record = UserLesson.create({ userId, courseLessonId: payload.courseLessonId });
    }

    Object.assign(record, {
      stoppedAt: payload.stoppedAt ?? record.stoppedAt,
      isCompleted: payload.isCompleted ?? record.isCompleted,
    });

    return UserLesson.save(record);
  }

  async findOne(userId: number, courseLessonId: number): Promise<UserLesson> {
    const record = await UserLesson.findOneBy({ userId, courseLessonId });
    if (!record) throw new NotFoundException('Lesson progress not found');
    return record;
  }
}
