import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { CartItemPublicService } from '../../service/cartItems/cartItem.public.service';
import { CartItemCreatePublicDto } from '../../dtos/cartItems/public/cartItem.create.public.dto';
import { CartItemUpdatePublicDto } from '../../dtos/cartItems/public/cartItem.update.public.dto';
import { CartItemListPublicDto } from '../../dtos/cartItems/public/cartItem.list.public.dto';

@ApiTags('Cart - Public')
@ApiBearerAuth()
@Controller('public/cart')
@UseGuards(AuthenticationGuard)
@Roles(Role.user, Role.admin, Role.superAdmin)
export class CartItemPublicController {
  constructor(private readonly service: CartItemPublicService) {}

  @Post()
  async addToCart(@Req() req: any, @Body() payload: CartItemCreatePublicDto) {
    const item = await this.service.addToCart(payload, req.user.id);
    return plainToInstance(CartItemListPublicDto, item, { excludeExtraneousValues: true });
  }

  @Get()
  @ApiOkResponse({ type: () => CartItemListPublicDto, isArray: true })
  async getCart(@Req() req: any) {
    const items = await this.service.getCart(req.user.id);
    return plainToInstance(CartItemListPublicDto, items, { excludeExtraneousValues: true });
  }

  @Patch(':id')
  async updateQuantity(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: CartItemUpdatePublicDto,
  ) {
    const item = await this.service.updateQuantity(id, req.user.id, payload);
    return plainToInstance(CartItemListPublicDto, item, { excludeExtraneousValues: true });
  }

  @Delete(':id')
  async removeFromCart(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    await this.service.removeFromCart(id, req.user.id);
    return { message: 'Item removed successfully' };
  }
}
