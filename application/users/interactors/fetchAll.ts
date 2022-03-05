import { IFetchAll } from '@/application/users/useCase/IFetchAll';
import { User } from '@/domain/models/users/user';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class FetchAll implements IFetchAll {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(): Promise<User[]> {
    return this.userRepository.fetchAll();
  }
}
