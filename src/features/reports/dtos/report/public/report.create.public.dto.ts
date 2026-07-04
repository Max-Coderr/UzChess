import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { ReportType } from '../../../../../core/enums/report-type.enum';

export class ReportCreatePublicDto {
  @ApiProperty({ enum: ReportType })
  @IsEnum(ReportType)
  target!: ReportType;

  @ApiProperty()
  @IsString()
  targetId!: number;

  @ApiProperty()
  @IsString()
  categoryId!: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  message?: string;
}
