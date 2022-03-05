/* eslint-disable import/no-absolute-path */
import { AxiosRequestConfig } from 'axios';
import { USERS } from '@/infrastructure/Path';
import axiosBase from '@/infrastructure/provider/axiosBase';
import IClient from '@/infrastructure/provider/IClient';
import { objectKeysToCamel } from '@/utils/changeCase';

const result = (data: any) => ({ data });

const wrapPromise = (item: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(result(objectKeysToCamel(item)));
    }, 500),
  );

const mockPaths = [
  {
    path: USERS,
    value: require('@/infrastructure/mock/data/users/index.ts').default,
  },
];

const getTarget = (path: string | undefined) => {
  return mockPaths.filter((item) => item.path === path);
};

class MockClient implements IClient {
  /**
   * post
   */
  post(path: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();

    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.post(path, data, config);
  }

  // TODO: 整備
  put(path: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.put(path, data, config);
  }

  // TODO: 整備
  get(path: string, config?: AxiosRequestConfig): Promise<any> {
    const matchedId = path.match(/\d+$/);
    const lastPath = matchedId
      ? path.split('/').splice(2, 1)[0]
      : path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length === 0) {
      return axiosBase.get(path, config);
    }

    if (matchedId) {
      const id = matchedId ? Number(matchedId[0]) : 0;
      const obj = target[0].value.data.find((item: any) => item.id === id);
      return wrapPromise({ data: obj });
    }
    return wrapPromise(target[0].value);
  }

  // TODO: 整備
  delete(path: string, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.delete(path, config);
  }
}

export const mockClient = new MockClient();
