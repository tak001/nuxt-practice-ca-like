import di from '@/di/user';
import User from '@/domain/models/users/UserResponse';

class UserUseCase {
  async findAll(): Promise<User[]> {
    const useCase = di.getInstance('fetchAll');
    const result = await useCase.execute();
    return result;
  }

  async find(id: User['id']): Promise<User> {
    const useCase = di.getInstance('fetch');
    const result = await useCase.execute(id);
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
