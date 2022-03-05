import Book from '@/domain/models/books/bookResponse';

export interface IDelete {
  execute: (id: Book['id']) => Promise<void>;
}
