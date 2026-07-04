import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirImage } from '../../entities/souvenir-image.entity';
import { Souvenir } from '../../entities/souvenir.entity';

@Injectable()
export class SouvenirImagesAdminService {
  async addImages(souvenirId: number, files: Express.Multer.File[]) {
    const souvenir = await Souvenir.findOneBy({ id: souvenirId });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }

    const images = files.map((file) =>
      SouvenirImage.create({
        souvenirId,
        image: file.path,
      } as SouvenirImage),
    );

    await SouvenirImage.save(images);
    return images;
  }

  async deleteImage(imageId: number) {
    const image = await SouvenirImage.findOneBy({ id: imageId });
    if (!image) {
      throw new NotFoundException('Image with given id not found');
    }
    await SouvenirImage.remove(image);
    return true;
  }
}
