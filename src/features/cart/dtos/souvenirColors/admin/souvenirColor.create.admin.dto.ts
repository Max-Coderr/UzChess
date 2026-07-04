import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class SouvenirColorCreateAdminDto {
  @ApiProperty()
  @IsInt()
  souvenirId!: number;

  @ApiProperty()
  @IsInt()
  colorId!: number;
}
