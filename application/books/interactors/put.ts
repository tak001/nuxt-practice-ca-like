import { IPut } from '@/application/books/usecase';
import Book from '@/domain/models/books/bookResponse';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';

export class Put implements IPut {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(args: { id: Book['id']; book: Book }): Promise<void> {
    await this.bookRepository.put(args);
  }
}
