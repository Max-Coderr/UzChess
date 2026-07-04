import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:1234@localhost:5433/uzchess',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
};