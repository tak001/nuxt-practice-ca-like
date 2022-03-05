import { User } from '@/domain/models/users/user';

export interface IFetchAll {
  execute(): Promise<User[]>;
}
