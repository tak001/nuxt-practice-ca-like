import { IFetchAll } from '@/application/books/useCase/IFetchAll';
import Book from '@/domain/models/books/bookResponse';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';

export class FetchAll implements IFetchAll {
  constructor(private readonly bookRepository: IBookRepository) {}

  execute(): Promise<Book[]> {
    return this.bookRepository.fetchAll();
  }
}
