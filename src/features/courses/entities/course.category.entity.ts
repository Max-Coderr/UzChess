import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('courseCategories')
export class CourseCategory extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;
}
