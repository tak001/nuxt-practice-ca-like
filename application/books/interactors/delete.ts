import { IDelete } from '@/application/books/usecase';
import Book from '@/domain/models/books/bookResponse';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';

export class Delete implements IDelete {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(id: Book['id']): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
