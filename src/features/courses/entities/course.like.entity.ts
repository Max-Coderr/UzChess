import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from './course.entity';
import { User } from '../../auth/entities/user.entity';

@Entity('courseLikes')
export class CourseLike extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user!: User;

  @Column()
  courseId!: number;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course!: Course;

  @Column({ type: 'timestamp' })
  date!: string;
}
