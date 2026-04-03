import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Author } from '../../common/entities/author.entity';
import { CourseCategory } from './course.category.entity';
import { Language } from '../../common/entities/language.entity';
import { Difficulty } from '../../common/entities/difficulty.entity';

@Entity('courses')
export class Course extends BaseModel {
  @Column()
  authorId!: number;

  @ManyToOne(() => Author)
  @JoinColumn({ name: 'authorId' })
  author!: Author;

  @Column()
  categoryId!: number;

  @ManyToOne(() => CourseCategory)
  @JoinColumn({ name: 'categoryId' })
  category!: CourseCategory;

  @Column()
  languageId!: number;

  @ManyToOne(() => Language)
  @JoinColumn({ name: 'languageId' })
  language!: Language;

  @Column()
  difficultyId!: number;

  @ManyToOne(() => Difficulty)
  @JoinColumn({ name: 'difficultyId' })
  difficulty!: Difficulty;

  @Column({ length: 128 })
  title!: string;

  @Column({ length: 128 })
  image!: string;

  @Column('decimal', { precision: 12, scale: 2 })
  price!: number;

  @Column('decimal', { precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ default: false })
  isPublished!: boolean;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column('decimal', { precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  sectionsCount!: number;

  @Column({ default: 0 })
  lessonsCount!: number;
}
