import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserLessonListPublicDto {
  @Expose()
  @ApiProperty()
  courseLessonId: number;

  @Expose()
  @ApiProperty()
  stoppedAt: number | null;

  @Expose()
  @ApiProperty()
  isCompleted: boolean;
}
