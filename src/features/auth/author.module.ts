import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from '../../config/jwt-module.config';
import { AuthorAdminController } from './controllers/author/author.admin.controller';
import { AuthorAdminService } from './services/author/author.admin.service';
import { UserAdminController } from './controllers/users/user.admin.controller';
import { UserPublicController } from './controllers/users/user.public.controller';
import { UserAuthController } from './controllers/users/user.auth.controller';
import { UserAdminService } from './services/users/user.admin.service';
import { UserPublicService } from './services/users/user.public.service';
import { OtpCodePublicService } from './services/otpCodes/otp-code.public.service';
import { OtpCodeAdminService } from './services/otpCodes/otp-code.admin.service';
import { OtpCodeAdminController } from './controllers/otpCodes/otp-code.admin.controller';
import { UserLessonAdminController } from './controllers/usersLessons/user.lesson.admin.controller';
import { UserLessonPublicController } from './controllers/usersLessons/user.lesson.public.controller';
import { UserLessonAdminService } from './services/usersLessons/user.lesson.admin.service';
import { UserLessonPublicService } from './services/usersLessons/user.lesson.public.service';

@Module({
  imports: [JwtModule.register(jwtModuleConfig)],
  controllers: [
    AuthorAdminController,
    UserAdminController,
    UserPublicController,
    UserAuthController,
    OtpCodeAdminController,
    UserLessonAdminController,
    UserLessonPublicController,
  ],
  providers: [
    AuthorAdminService,
    UserAdminService,
    UserPublicService,
    OtpCodePublicService,
    OtpCodeAdminService,
    UserLessonAdminService,
    UserLessonPublicService,
  ],
})
export class AuthorModule {}
