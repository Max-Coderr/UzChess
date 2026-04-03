import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class NewsListPublicDto{
  @Expose()
  @ApiProperty()
  id!: number

  @Expose()
  @ApiProperty()
  title! : string

  @Expose()
  @ApiProperty()
  date! : string
}