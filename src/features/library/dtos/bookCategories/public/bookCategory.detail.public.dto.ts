import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryDetailPublicDto {
  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  createdAt! : string

  @Expose()
  @ApiProperty()
  updatedAt! : string
}