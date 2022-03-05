import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';

export interface IFetch {
  execute: (id: Id) => Promise<User>;
}
