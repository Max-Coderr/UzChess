import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { SouvenirColor } from './souvenir-color.entity';

@Entity('color')
export class Color extends BaseModel {
  @Column({ type: 'varchar', length: 128 })
  title!: string;

  @Column({ type: 'varchar', length: 10 })
  color!: string;

  @OneToMany(() => SouvenirColor, (sc) => sc.colorItem)
  souvenirColors!: SouvenirColor[];
}
