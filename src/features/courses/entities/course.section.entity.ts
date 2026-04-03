import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from './course.entity';

@Entity('courseSections')
export class CourseSection extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course!: Course;

  @Column({ length: 256 })
  title!: string;

  @Column({ nullable: true })
  order?: number;

  @Column({ type: 'timestamp' })
  date!: string;
}
