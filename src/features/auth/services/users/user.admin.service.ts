import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserUpdateAdminDto } from '../../dtos/users/admin/user.update.admin.dto';

@Injectable()
export class UserAdminService {
  async findAll() {
    return await User.find();
  }

  async findOne(id: number) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, payload: UserUpdateAdminDto) {
    const user = await this.findOne(id);
    Object.assign(user, payload);
    await User.save(user);
    return user;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await User.remove(user);
    return true;
  }
}
