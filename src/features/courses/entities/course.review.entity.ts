import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from './course.entity';
import { User } from '../../auth/entities/user.entity';

@Entity('courseReviews')
export class CourseReview extends BaseModel {
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

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;

  @Column({ type: 'timestamp' })
  date!: string;
}
