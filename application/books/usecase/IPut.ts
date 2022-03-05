import Book from '@/domain/models/books/bookResponse';

export interface IPut {
  execute: (args: { id: Book['id']; book: Book }) => Promise<void>;
}
