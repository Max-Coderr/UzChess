import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CartItemType } from '../../../../../core/enums/cart-item-type.enum';

export class CartItemListPublicDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  userId: number;

  @Expose()
  @ApiProperty({ enum: CartItemType })
  target: CartItemType;

  @Expose()
  @ApiProperty()
  targetId: number;

  @Expose()
  @ApiProperty()
  quantity: number;
}
