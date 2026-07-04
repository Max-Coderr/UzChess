import { Injectable, NotFoundException } from '@nestjs/common';
import { Souvenir } from '../../entities/souvenir.entity';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@Injectable()
export class SouvenirPublicService {
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
}
