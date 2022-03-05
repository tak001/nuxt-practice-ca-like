import { IFetch } from '@/application/books/usecase';
import Book from '@/domain/models/books/bookResponse';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';

export class Fetch implements IFetch {
  constructor(private readonly bookRepository: IBookRepository) {}

  execute(id: Book['id']): Promise<Book> {
    return this.bookRepository.fetch(id);
  }
}
