import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryListAdminDto{
  @Expose()
  @ApiProperty()
  title! : string
}