import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';

export default interface IUserRepository {
  fetchAll(): Promise<User[]>;
  fetch(id: Id): Promise<User>;
}
