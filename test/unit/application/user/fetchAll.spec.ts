import userUseCase from '@/application/users';
import { objectKeysToCamel } from '@/utils/changeCase';
import mockData from '@/infrastructure/mock/data/users';

const mock: typeof mockData = objectKeysToCamel(mockData);

// 第一引数は、テストしたいclassをpath指定
jest.mock('@/application/users', () => ({
  // UserUseCaseのclass内のメソッドが呼ばれた時にmockを返すようにする
  findAll: () => mock,
  find: (id: number) => mock.data.find((item) => item.id === id),
}));

describe('application: User', () => {
  test('fetchAll', async () => {
    const res = await userUseCase.findAll();
    expect(res).toEqual(mock);
  });

  const testData = [1, 2];

  test.each(testData)('fetch: id = %#', async (testData) => {
    const res = await userUseCase.find(testData);
    const expected = mock.data.find((item) => item.id === testData);
    expect(res).toEqual(expected);
  });
});
