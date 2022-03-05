import di from '@/di/book';
import Book from '@/domain/models/books/bookResponse';

class BookUseCase {
  async delete(id: Book['id']): Promise<void> {
    const useCase = di.getInstance('delete');
    await useCase.execute(id);
  }

  async findAll(): Promise<Book[]> {
    const useCase = di.getInstance('fetchAll');
    const result = await useCase.execute();
    return result;
  }

  async find(id: Book['id']): Promise<Book> {
    const useCase = di.getInstance('fetch');
    const result = await useCase.execute(id);
    return result;
  }

  async post(args: {
    title: Book['title'];
    author: Book['author'];
  }): Promise<void> {
    const useCase = di.getInstance('post');
    await useCase.execute(args);
  }

  async put(args: { id: Book['id']; book: Book }): Promise<void> {
    const useCase = di.getInstance('put');
    await useCase.execute(args);
  }
}

const bookUseCase = new BookUseCase();

export default bookUseCase;
