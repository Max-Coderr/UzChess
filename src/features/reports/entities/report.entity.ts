import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { ReportType } from '../../../core/enums/report-type.enum';

@Entity('reports')
export class Report extends BaseModel {
  @Column()
  userId!: number;

  @Column({ type: 'enum', enum: ReportType })
  target!: ReportType;

  @Column()
  targetId!: number;

  @Column()
  categoryId!: number;

  @Column({ type: 'text', nullable: true })
  message?: string;
}
