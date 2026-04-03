import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthorAdminController } from './controllers/author/author.admin.controller';
import { AuthorAdminService } from './services/author/author.admin.service';

@Module({
  imports: [JwtModule],
  controllers: [AuthorAdminController],
  providers: [AuthorAdminService],
})
export class AuthorModule {}
