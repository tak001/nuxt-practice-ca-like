import { IPost } from '@/application/books/usecase';
import Book from '@/domain/models/books/bookResponse';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';

export class Post implements IPost {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(args: {
    title: Book['title'];
    author: Book['author'];
  }): Promise<void> {
    await this.bookRepository.post(args);
  }
}
