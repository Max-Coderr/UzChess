import { Injectable, NotFoundException } from '@nestjs/common';
import { Color } from '../../entities/color.entity';
import { ColorCreateAdminDto } from '../../dtos/colors/admin/color.create.admin.dto';
import { ColorUpdateAdminDto } from '../../dtos/colors/admin/color.update.admin.dto';
import { PaginationFilters } from '../../../common/filters/pagination.filter';

@Injectable()
export class ColorAdminService {
  async create(payload: ColorCreateAdminDto) {
    const color = Color.create(payload as Color);
    await Color.save(color);
    return color;
  }

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

  async getOne(id: number) {
    const color = await Color.findOneBy({ id });
    if (!color) {
      throw new NotFoundException('Color with given id not found');
    }
    return color;
  }

  async update(id: number, payload: ColorUpdateAdminDto) {
    const color = await this.getOne(id);
    Object.assign(
      color,
      Object.fromEntries(Object.entries(payload).filter(([_, v]) => v !== undefined)),
    );
    await Color.save(color);
    return color;
  }

  async delete(id: number) {
    const color = await this.getOne(id);
    await Color.remove(color);
    return true;
  }
}
