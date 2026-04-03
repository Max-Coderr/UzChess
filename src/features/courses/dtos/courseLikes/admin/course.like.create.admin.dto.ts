import { IsInt, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CourseLikeCreateAdminDto {
  @ApiProperty()
  @IsInt()
  userId!: number;

  @ApiProperty()
  @IsInt()
  courseId!: number;

  @ApiProperty()
  @IsDateString()
  date!: string;
}
