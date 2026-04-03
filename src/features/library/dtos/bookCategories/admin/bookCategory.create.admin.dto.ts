import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryCreateAdminDto{
  @IsString()
  @ApiProperty()
  @MaxLength(256)
  title! : string
}