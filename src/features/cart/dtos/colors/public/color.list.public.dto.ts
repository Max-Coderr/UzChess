import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ColorListPublicDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  title: string;

  @Expose()
  @ApiProperty()
  color: string;
}
