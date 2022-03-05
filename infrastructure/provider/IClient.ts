import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

export default interface IClient {
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;
}
