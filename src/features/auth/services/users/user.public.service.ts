import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserUpdatePublicDto } from '../../dtos/users/public/user.update.public.dto';

@Injectable()
export class UserPublicService {
  async findOne(id: number) {
    const user = await User.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, payload: UserUpdatePublicDto) {
    const user = await this.findOne(id);
    Object.assign(user, payload);
    await User.save(user);
    return user;
  }
}
