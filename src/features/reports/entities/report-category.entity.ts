import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('report_categories')
export class ReportCategory extends BaseModel {
  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;
}
