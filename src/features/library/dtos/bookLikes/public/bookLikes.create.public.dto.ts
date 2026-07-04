import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class BookLikesCreatePublicDto {
  @IsInt()
  @ApiProperty()
  bookId!: number;
}
