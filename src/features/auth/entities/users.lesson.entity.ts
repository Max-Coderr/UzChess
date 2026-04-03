import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { User } from './user.entity';
import { CourseLesson } from '../../courses/entities/course.lesson.entity';

@Entity('users_lessons')
export class UserLesson extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user!: User;

  @Column()
  courseLessonId!: number;

  @ManyToOne(() => CourseLesson)
  @JoinColumn({ name: 'courseLessonId' })
  courseLesson!: CourseLesson;

  @Column({ nullable: true })
  stoppedAt?: number;

  @Column({ default: false })
  isCompleted!: boolean;
}
