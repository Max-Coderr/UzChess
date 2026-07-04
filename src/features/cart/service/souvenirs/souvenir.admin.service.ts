import { Injectable, NotFoundException } from '@nestjs/common';
import { Souvenir } from '../../entities/souvenir.entity';
import { SouvenirCreateAdminDto } from '../../dtos/souvenirs/admin/souvenir.create.admin.dto';
import { SouvenirUpdateAdminDto } from '../../dtos/souvenirs/admin/souvenir.update.admin.dto';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@Injectable()
export class SouvenirAdminService {
  async create(payload: SouvenirCreateAdminDto) {
    const souvenir = Souvenir.create(payload as Souvenir);
    await Souvenir.save(souvenir);
    return souvenir;
  }

  async getAll(filters: PaginationFilters) {
    const take = filters.size || 10;
    const page = filters.page || 1;
    const skip = (page - 1) * take;

    const [data, totalCount] = await Souvenir.findAndCount({
      take,
      skip,
      order: { id: 'DESC' },
    });

    const totalPages = Math.ceil(totalCount / take);
    const previousPage = page > 1 ? page - 1 : null;
    const nextPage = page < totalPages ? page + 1 : null;

    return {
      totalCount,
      totalPages,
      previousPage,
      currentPage: page,
      nextPage,
      data,
    };
  }

  async getOne(id: number) {
    const souvenir = await Souvenir.findOne({
      where: { id },
      relations: ['images', 'colors', 'colors.colorItem'],
    });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }
    return souvenir;
  }

  async update(id: number, payload: SouvenirUpdateAdminDto) {
    const souvenir = await Souvenir.findOneBy({ id });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }
    Object.assign(
      souvenir,
      Object.fromEntries(Object.entries(payload).filter(([_, v]) => v !== undefined)),
    );
    await Souvenir.save(souvenir);
    return souvenir;
  }

  async delete(id: number) {
    const souvenir = await Souvenir.findOneBy({ id });
    if (!souvenir) {
      throw new NotFoundException('Souvenir with given id not found');
    }
    await Souvenir.remove(souvenir);
    return true;
  }
}
