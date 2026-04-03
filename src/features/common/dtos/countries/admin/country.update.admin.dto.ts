import { PartialType } from '@nestjs/swagger';
import { CountryCreateAdminDto } from './country.create.admin.dto';

export class CountryUpdateAdminDto extends PartialType(CountryCreateAdminDto) {}
