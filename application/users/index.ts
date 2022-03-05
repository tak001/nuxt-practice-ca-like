import di from '@/di';
import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';

class UserUseCase {
  async findAll(): Promise<User[]> {
    const useCase = di.getInstance('fetchAll');
    const result = await useCase.execute();
    return result;
  }

  async find(id: Id): Promise<User> {
    const useCase = di.getInstance('fetch');
    const result = await useCase.execute(id);
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
