import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { SouvenirImage } from './souvenir-image.entity';
import { SouvenirReview } from './souvenir-review.entity';
import { SouvenirColor } from './souvenir-color.entity';

@Entity('souvenirs')
export class Souvenir extends BaseModel {
  @Column({ type: 'varchar', length: 128 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'decimal' })
  price!: number;

  @OneToMany(() => SouvenirImage, (img) => img.souvenir)
  images!: SouvenirImage[];

  @OneToMany(() => SouvenirReview, (review) => review.souvenir)
  reviews!: SouvenirReview[];

  @OneToMany(() => SouvenirColor, (sc) => sc.souvenir)
  colors!: SouvenirColor[];
}
