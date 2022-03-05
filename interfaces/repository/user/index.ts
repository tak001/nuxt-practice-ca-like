import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import { API, USERS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: IClient) {}

  async fetchAll(): Promise<User[]> {
    const { data } = await this._client.get<User[]>(API + USERS);
    return data.data;
  }

  async fetch(id: Id): Promise<User> {
    const { data } = await this._client.get<User>(API + `${USERS}/${id}`);
    return data.data;
  }
}
