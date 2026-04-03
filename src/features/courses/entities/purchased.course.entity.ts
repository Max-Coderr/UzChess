import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { User } from '../../auth/entities/user.entity';
import { Course } from './course.entity';

@Entity('purchasedCourses')
export class PurchasedCourse extends BaseModel {
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

  @Column({ default: false })
  isCompleted!: boolean;

  @Column({ type: 'timestamp' })
  date!: string;
}
