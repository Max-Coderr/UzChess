import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class SouvenirReviewCreatePublicDto {
  @ApiProperty()
  @IsInt()
  souvenirId!: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating!: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(512)
  comment?: string;
}
