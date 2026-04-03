import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthorAdminController } from './controllers/author/author.admin.controller';
import { AuthorAdminService } from './services/author/author.admin.service';
import { UserAdminController } from './controllers/users/user.admin.controller';
import { UserPublicController } from './controllers/users/user.public.controller';
import { UserAdminService } from './services/users/user.admin.service';
import { UserPublicService } from './services/users/user.public.service';

@Module({
  imports: [JwtModule],
  controllers: [
    AuthorAdminController,
    UserAdminController,
    UserPublicController,

  ],
  providers: [
    AuthorAdminService,
    UserAdminService,
    UserPublicService

  ],
})
export class AuthorModule {}
