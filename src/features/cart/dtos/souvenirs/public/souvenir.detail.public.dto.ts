import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SouvenirDetailPublicDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  title: string;

  @Expose()
  @ApiProperty()
  description: string;

  @Expose()
  @ApiProperty()
  price: number;

  @Expose()
  @ApiProperty()
  createdAt: string;
}
