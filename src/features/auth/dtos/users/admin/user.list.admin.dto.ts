import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Role } from '../../../../../core/enums/role.enum';
import { LoginType } from '../../../../../core/enums/login-type.enum';

export class UserListAdminDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty({ enum: Role })
  role: Role;

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

  @Expose()
  @ApiProperty()
  isActive: boolean;

  @Expose()
  @ApiProperty()
  createdAt: Date;
}
