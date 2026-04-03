import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('countries')
export class Country extends BaseModel {
  @Column({ length: 64 })
  title!: string;

  @Column({ length: 128 })
  flag!: string;
}
