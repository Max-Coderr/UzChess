import { PartialType } from '@nestjs/swagger';
import { LanguageCreateAdminDto } from './language.create.admin.dto';

export class LanguageUpdateAdminDto extends PartialType(LanguageCreateAdminDto) {}
