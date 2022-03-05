import Book from '@/domain/models/books/bookResponse';
import { API, BOOKS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';

export class BookRepository implements IBookRepository {
  constructor(private readonly _client: IClient) {}

  async delete(id: Book['id']): Promise<void> {
    await this._client.delete(API + `${BOOKS}/${id}`);
  }

  async fetchAll(): Promise<Book[]> {
    const { data } = await this._client.get<Book[]>(API + BOOKS);
    return data.data;
  }

  async fetch(id: Book['id']): Promise<Book> {
    const { data } = await this._client.get<Book>(API + `${BOOKS}/${id}`);
    return data.data;
  }

  async post(args: {
    title: Book['title'];
    author: Book['author'];
  }): Promise<void> {
    await this._client.post(API + BOOKS, args);
  }

  async put(args: { id: Book['id']; book: Book }): Promise<void> {
    await this._client.put(API + `${BOOKS}/${args.id}`, args.book);
  }
}
