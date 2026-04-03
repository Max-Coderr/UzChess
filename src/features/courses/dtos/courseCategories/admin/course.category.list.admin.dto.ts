import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CourseCategoryListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  createdAt!: string;
}
