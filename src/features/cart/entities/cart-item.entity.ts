import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CartItemType } from '../../../core/enums/cart-item-type.enum';

@Entity('cart_items')
export class CartItem extends BaseModel {
  @Column()
  userId!: number;

  @Column({ type: 'enum', enum: CartItemType })
  target!: CartItemType;

  @Column()
  targetId!: number;

  @Column({ default: 1 })
  quantity!: number;
}
