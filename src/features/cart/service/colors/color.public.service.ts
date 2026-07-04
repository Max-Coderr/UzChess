import { Injectable } from '@nestjs/common';
import { Color } from '../../entities/color.entity';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@Injectable()
export class ColorPublicService {
  async getAll(filters: PaginationFilters) {
    const take = filters.size || 10;
    const page = filters.page || 1;
    const skip = (page - 1) * take;

    const [data, totalCount] = await Color.findAndCount({
      take,
      skip,
      order: { id: 'ASC' },
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
}
