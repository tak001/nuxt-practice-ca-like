import Book from '@/domain/models/books/bookResponse';

export default interface IBookRepository {
  delete(id: Book['id']): Promise<void>;
  fetchAll(): Promise<Book[]>;
  fetch(id: Book['id']): Promise<Book>;
  post(args: { title: Book['title']; author: Book['author'] }): Promise<void>;
  put(args: { id: Book['id']; book: Book }): Promise<void>;
}
