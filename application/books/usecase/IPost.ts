import Book from '@/domain/models/books/bookResponse';

export interface IPost {
  execute: (args: {
    title: Book['title'];
    author: Book['author'];
  }) => Promise<void>;
}
