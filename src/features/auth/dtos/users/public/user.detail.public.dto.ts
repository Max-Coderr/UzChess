import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { LoginType } from '../../../../../core/enums/login-type.enum';

export class UserDetailPublicDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  fullName: string;

  @Expose()
  @ApiProperty({ nullable: true })
  profileImage: string;

  @Expose()
  @ApiProperty()
  login: string;

  @Expose()
  @ApiProperty({ enum: LoginType })
  loginType: LoginType;

  @Expose()
  @ApiProperty({ nullable: true })
  birthDate: string;

  @Expose()
  @ApiProperty()
  isVerified: boolean;
}
