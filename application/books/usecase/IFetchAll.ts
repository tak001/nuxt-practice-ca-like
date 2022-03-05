import Book from '@/domain/models/books/bookResponse';

export interface IFetchAll {
  execute(): Promise<Book[]>;
}
