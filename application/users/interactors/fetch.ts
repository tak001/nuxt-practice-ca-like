import { IFetch } from '@/application/users/useCase';
import User from '@/domain/models/users/UserResponse';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class Fetch implements IFetch {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(id: User['id']): Promise<User> {
    return this.userRepository.fetch(id);
  }
}
