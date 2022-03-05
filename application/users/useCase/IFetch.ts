import User from '@/domain/models/users/UserResponse';

export interface IFetch {
  execute: (id: User['id']) => Promise<User>;
}
