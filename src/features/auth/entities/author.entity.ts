import { BaseModel } from '../../../core/base-model';
import { Column, Entity } from 'typeorm';

@Entity('author')
export class AuthorEntity extends BaseModel {
  @Column({length: 64})
  fullName!: string
}