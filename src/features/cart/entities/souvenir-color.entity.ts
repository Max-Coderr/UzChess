import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Souvenir } from './souvenir.entity';
import { Color } from './color.entity';

@Entity('souvenirColor')
export class SouvenirColor extends BaseModel {
  @Column()
  souvenirId!: number;

  @ManyToOne(() => Souvenir, (s) => s.colors)
  souvenir!: Souvenir;

  @Column()
  colorId!: number;

  @ManyToOne(() => Color, (c) => c.souvenirColors)
  colorItem!: Color;
}
