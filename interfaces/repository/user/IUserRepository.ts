import User from '@/domain/models/users/UserResponse';

export default interface IUserRepository {
  fetchAll(): Promise<User[]>;
  fetch(id: User['id']): Promise<User>;
}
