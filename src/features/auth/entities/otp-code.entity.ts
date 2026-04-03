import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { OtpType } from '../../../core/enums/otp-type.enum';

@Entity('otpCodes')
export class OtpCode extends BaseModel {
  @Column()
  userId!: number;

  @Column({ length: 6 })
  code!: string;

  @Column({ type: 'timestamp' })
  date!: string;

  @Column({ type: 'enum', enum: OtpType })
  type!: OtpType;
}
