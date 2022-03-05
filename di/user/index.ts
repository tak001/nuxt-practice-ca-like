/* eslint-disable no-dupe-class-members */
import { Fetch, FetchAll } from '@/application/users/interactors';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { UserRepository } from '@/interfaces/repository/user';

type KeyType = 'fetchAll' | 'fetch';

// TODO: 実務に耐えれないので、ちゃんとしたDIコンテナを作成する
class DI {
  constructor(private readonly _client: IClient) {}

  // Function Overloading
  getInstance(type: 'fetchAll'): FetchAll;
  getInstance(type: 'fetch'): Fetch;
  getInstance(type: KeyType) {
    if (type === 'fetchAll') {
      const repository = new UserRepository(this._client);
      return new FetchAll(repository);
    }
    if (type === 'fetch') {
      const repository = new UserRepository(this._client);
      return new Fetch(repository);
    }
  }
}

const di = new DI(httpClientFactory.getClient());

export default di;
