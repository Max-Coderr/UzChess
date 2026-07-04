import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Souvenir } from './souvenir.entity';

@Entity('souvenir-review')
export class SouvenirReview extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  souvenirId!: number;

  @ManyToOne(() => Souvenir, (s) => s.reviews)
  souvenir!: Souvenir;

  @Column()
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment!: string;
}
