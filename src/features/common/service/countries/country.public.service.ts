import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from '../../entities/country.entity';

@Injectable()
export class CountryPublicService {
  async findAll() {
    return await Country.find();
  }

  async findOne(id: number) {
    const country = await Country.findOneBy({ id });
    if (!country) throw new NotFoundException('Country not found');
    return country;
  }
}
