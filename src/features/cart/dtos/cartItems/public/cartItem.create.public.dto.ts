import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { CartItemType } from '../../../../../core/enums/cart-item-type.enum';

export class CartItemCreatePublicDto {
  @ApiProperty({ enum: CartItemType })
  @IsEnum(CartItemType)
  target!: CartItemType;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  targetId!: number;

  @ApiProperty({ required: false, default: 1 })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  quantity?: number;
}
