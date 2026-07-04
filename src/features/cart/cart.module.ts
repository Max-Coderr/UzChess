import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

// Entities
import { Souvenir } from './entities/souvenir.entity';
import { Color } from './entities/color.entity';
import { SouvenirColor } from './entities/souvenir-color.entity';
import { SouvenirImage } from './entities/souvenir-image.entity';
import { SouvenirLike } from './entities/souvenir-like.entity';
import { SouvenirReview } from './entities/souvenir-review.entity';
import { CartItem } from './entities/cart-item.entity';

// Services
import { ColorAdminService } from './service/colors/color.admin.service';
import { ColorPublicService } from './service/colors/color.public.service';
import { SouvenirAdminService } from './service/souvenirs/souvenir.admin.service';
import { SouvenirPublicService } from './service/souvenirs/souvenir.public.service';
import { SouvenirColorsAdminService } from './service/souvenirColors/souvenirColors.admin.service';
import { SouvenirImagesAdminService } from './service/souvenirImages/souvenirImages.admin.service';
import { SouvenirLikesPublicService } from './service/souvenirLikes/souvenirLikes.public.service';
import { SouvenirReviewsPublicService } from './service/souvenirReviews/souvenirReviews.public.service';
import { CartItemPublicService } from './service/cartItems/cartItem.public.service';

// Controllers
import { ColorAdminController } from './controllers/colors/color.admin.controller';
import { ColorPublicController } from './controllers/colors/color.public.controller';
import { SouvenirAdminController } from './controllers/souvenirs/souvenir.admin.controller';
import { SouvenirPublicController } from './controllers/souvenirs/souvenir.public.controller';
import { SouvenirColorAdminController } from './controllers/souvenirColors/souvenirColor.admin.controller';
import { SouvenirImageAdminController } from './controllers/souvenirImages/souvenirImage.admin.controller';
import { SouvenirLikePublicController } from './controllers/souvenirLikes/souvenirLike.public.controller';
import { SouvenirReviewPublicController } from './controllers/souvenirReviews/souvenirReview.public.controller';
import { CartItemPublicController } from './controllers/cartItems/cartItem.public.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Souvenir,
      Color,
      SouvenirColor,
      SouvenirImage,
      SouvenirLike,
      SouvenirReview,
      CartItem,
    ]),
    JwtModule,
  ],
  controllers: [
    ColorAdminController,
    ColorPublicController,
    SouvenirAdminController,
    SouvenirPublicController,
    SouvenirColorAdminController,
    SouvenirImageAdminController,
    SouvenirLikePublicController,
    SouvenirReviewPublicController,
    CartItemPublicController,
  ],
  providers: [
    ColorAdminService,
    ColorPublicService,
    SouvenirAdminService,
    SouvenirPublicService,
    SouvenirColorsAdminService,
    SouvenirImagesAdminService,
    SouvenirLikesPublicService,
    SouvenirReviewsPublicService,
    CartItemPublicService,
  ],
  exports: [CartItemPublicService],
})
export class CartModule {}
