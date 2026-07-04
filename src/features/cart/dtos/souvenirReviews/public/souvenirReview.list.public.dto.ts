import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SouvenirReviewListPublicDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  userId: number;

  @Expose()
  @ApiProperty()
  souvenirId: number;

  @Expose()
  @ApiProperty()
  rating: number;

  @Expose()
  @ApiProperty({ nullable: true })
  comment: string;
}
