import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirColor } from '../../entities/souvenir-color.entity';
import { Souvenir } from '../../entities/souvenir.entity';
import { Color } from '../../entities/color.entity';
import { SouvenirColorCreateAdminDto } from '../../dtos/souvenirColors/admin/souvenirColor.create.admin.dto';

@Injectable()
export class SouvenirColorsAdminService {
  async addColor(payload: SouvenirColorCreateAdminDto) {
    const souvenir = await Souvenir.findOneBy({ id: payload.souvenirId });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }

    const color = await Color.findOneBy({ id: payload.colorId });
    if (!color) {
      throw new NotFoundException('Color with given id not found');
    }

    const existing = await SouvenirColor.findOneBy({
      souvenirId: payload.souvenirId,
      colorId: payload.colorId,
    });
    if (existing) {
      return existing;
    }

    const souvenirColor = SouvenirColor.create(payload as SouvenirColor);
    await SouvenirColor.save(souvenirColor);
    return souvenirColor;
  }

  async removeColor(id: number) {
    const souvenirColor = await SouvenirColor.findOneBy({ id });
    if (!souvenirColor) {
      throw new NotFoundException('SouvenirColor relation with given id not found');
    }
    await SouvenirColor.remove(souvenirColor);
    return true;
  }
}
