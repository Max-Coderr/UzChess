import { Controller, Delete, Param, ParseIntPipe, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { Role } from '../../../../core/enums/role.enum';
import { SouvenirImagesAdminService } from '../../service/souvenirImages/souvenirImages.admin.service';
import { storageOptions } from '../../../../config/multer.config';

@ApiTags('SouvenirImages - Admin')
@ApiBearerAuth()
@Controller('admin/souvenir-images')
@UseGuards(AuthenticationGuard)
@Roles(Role.admin, Role.superAdmin)
export class SouvenirImageAdminController {
  constructor(private readonly service: SouvenirImagesAdminService) {}

  @Post(':souvenirId')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: storageOptions,
      limits: { fileSize: 1024 * 512 },
    }),
  )
  async addImages(
    @Param('souvenirId', ParseIntPipe) souvenirId: number,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return await this.service.addImages(souvenirId, files);
  }

  @Delete(':imageId')
  async deleteImage(@Param('imageId', ParseIntPipe) imageId: number) {
    await this.service.deleteImage(imageId);
    return { message: 'Image deleted successfully' };
  }
}
