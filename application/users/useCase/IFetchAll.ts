import User from '@/domain/models/users/UserResponse';

export interface IFetchAll {
  execute(): Promise<User[]>;
}
