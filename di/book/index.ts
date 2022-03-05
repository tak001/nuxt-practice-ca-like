/* eslint-disable no-dupe-class-members */
import {
  Delete,
  Fetch,
  FetchAll,
  Post,
  Put,
} from '@/application/books/interactors';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { BookRepository } from '@/interfaces/repository/book';

type KeyType = 'delete' | 'fetchAll' | 'fetch' | 'post' | 'put';

// TODO: いけてないので、マジでちゃんとしたDIコンテナを作成する
class DI {
  constructor(private readonly _client: IClient) {}

  // Function Overloading
  getInstance(type: 'delete'): Delete;
  getInstance(type: 'fetchAll'): FetchAll;
  getInstance(type: 'fetch'): Fetch;
  getInstance(type: 'post'): Post;
  getInstance(type: 'put'): Put;
  getInstance(type: KeyType) {
    if (type === 'delete') {
      const repository = new BookRepository(this._client);
      return new Delete(repository);
    }
    if (type === 'fetchAll') {
      const repository = new BookRepository(this._client);
      return new FetchAll(repository);
    }
    if (type === 'fetch') {
      const repository = new BookRepository(this._client);
      return new Fetch(repository);
    }
    if (type === 'post') {
      const repository = new BookRepository(this._client);
      return new Post(repository);
    }
    if (type === 'put') {
      const repository = new BookRepository(this._client);
      return new Put(repository);
    }
  }
}

const di = new DI(httpClientFactory.getClient());

export default di;
