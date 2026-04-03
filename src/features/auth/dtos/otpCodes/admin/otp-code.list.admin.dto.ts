import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OtpType } from '../../../../../core/enums/otp-type.enum';

export class OtpCodeListAdminDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  userId: number;

  @Expose()
  @ApiProperty()
  code: string;

  @Expose()
  @ApiProperty()
  date: Date;

  @Expose()
  @ApiProperty({ enum: OtpType })
  type: OtpType;
}
