import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:1234@localhost:5433/uzchess',
  synchronize: true,
  entities: ['dist/**/*.entities.js'],
}