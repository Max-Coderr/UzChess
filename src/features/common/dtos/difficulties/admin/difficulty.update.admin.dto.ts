import { PartialType } from '@nestjs/swagger';
import { DifficultyCreateAdminDto } from './difficulty.create.admin.dto';

export class DifficultyUpdateAdminDto extends PartialType(DifficultyCreateAdminDto) {}
