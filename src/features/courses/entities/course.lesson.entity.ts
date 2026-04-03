import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Course } from './course.entity';
import { CourseSection } from './course.section.entity';

@Entity('courseLessons')
export class CourseLesson extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course!: Course;

  @Column()
  courseSectionId!: number;

  @ManyToOne(() => CourseSection)
  @JoinColumn({ name: 'courseSectionId' })
  courseSections!: CourseSection;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ length: 128, nullable: true })
  thumbnail?: string;

  @Column({ length: 256 })
  video!: string;

  @Column({ nullable: true })
  order?: number;

  @Column({ type: 'timestamp' })
  date!: string;

  @Column({ default: false })
  isFree!: boolean;
}
