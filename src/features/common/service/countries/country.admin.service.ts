import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from '../../entities/country.entity';
import { CountryCreateAdminDto } from '../../dtos/countries/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../../dtos/countries/admin/country.update.admin.dto';

@Injectable()
export class CountryAdminService {
  async findAll() {
    return await Country.find();
  }

  async findOne(id: number) {
    const country = await Country.findOneBy({ id });
    if (!country) throw new NotFoundException('Country not found');
    return country;
  }

  async create(payload: CountryCreateAdminDto) {
    const country = Country.create(payload as unknown as Country);
    await Country.save(country);
    return country;
  }

  async update(id: number, payload: CountryUpdateAdminDto) {
    const country = await this.findOne(id);
    Object.assign(country, payload);
    await Country.save(country);
    return country;
  }

  async remove(id: number) {
    const country = await this.findOne(id);
    await Country.remove(country);
    return true;
  }
}
