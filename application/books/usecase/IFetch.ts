import Book from '@/domain/models/books/bookResponse';

export interface IFetch {
  execute: (id: Book['id']) => Promise<Book>;
}
