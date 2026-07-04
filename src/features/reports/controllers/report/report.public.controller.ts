import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { ReportCreatePublicDto } from '../../dtos/report/public/report.create.public.dto';
import { ReportPublicService } from '../../service/report/report.public.service';

@ApiTags('Reports - Public')
@ApiBearerAuth()
@Controller('public/reports')
@UseGuards(AuthenticationGuard)
export class ReportPublicController {
  constructor(private readonly service: ReportPublicService) {}

  @Post()
  create(@Request() req, @Body() payload: ReportCreatePublicDto) {
    return this.service.create(req.user.id, payload);
  }
}
