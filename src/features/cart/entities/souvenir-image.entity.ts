import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Souvenir } from './souvenir.entity';

@Entity('souvenir-image')
export class SouvenirImage extends BaseModel {
  @Column()
  souvenirId!: number;

  @Column()
  image!: string;

  @ManyToOne(() => Souvenir, (s) => s.images)
  souvenir!: Souvenir;
}
