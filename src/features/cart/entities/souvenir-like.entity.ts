import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('souvenir-likes')
export class SouvenirLike extends BaseModel {
  @Column()
  userId!: number;

  @Column()
  souvenirId!: number;
}
