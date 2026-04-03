import { PartialType } from '@nestjs/swagger';
import { AuthorCreateAdminDto } from './author.create.admin.dto';

export class AuthorUpdateAdminDto extends PartialType(AuthorCreateAdminDto) {}
