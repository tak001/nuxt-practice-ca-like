import { IFetch } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class Fetch implements IFetch {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(id: Id): Promise<User> {
    return this.userRepository.fetch(id);
  }
}
