import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { DifficultyAdminController } from './controllers/difficulties/difficulty.admin.controller';
import { DifficultyPublicController } from './controllers/difficulties/difficulty.public.controller';
import { CountryAdminController } from './controllers/countries/country.admin.controller';
import { CountryPublicController } from './controllers/countries/country.public.controller';

import { DifficultyAdminService } from './service/difficulties/difficulty.admin.service';
import { DifficultyPublicService } from './service/difficulties/difficulty.public.service';
import { CountryAdminService } from './service/countries/country.admin.service';
import { CountryPublicService } from './service/countries/country.public.service';
import { LanguageAdminController } from './controllers/languages/language.admin.controller';
import { LanguagePublicController } from './controllers/languages/language.public.controller';
import { LanguageAdminService } from './service/languages/language.admin.service';
import { LanguagePublicService } from './service/languages/language.public.service';

@Module({
  imports: [JwtModule],
  controllers: [
    DifficultyAdminController,
    DifficultyPublicController,
    CountryAdminController,
    CountryPublicController,
    LanguageAdminController,
    LanguagePublicController
  ],

  providers: [
    DifficultyAdminService,
    DifficultyPublicService,
    CountryAdminService,
    CountryPublicService,
    LanguageAdminService,
    LanguagePublicService
  ],
})
export class CommonModule {}
