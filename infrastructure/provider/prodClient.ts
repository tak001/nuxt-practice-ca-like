import { AxiosRequestConfig } from 'axios';
import axiosBase from '@/infrastructure/provider/axiosBase';
import IClient from '@/infrastructure/provider/IClient';

export class ProdClient implements IClient {
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.post(url, data, config);
  }

  // TODO: 整備
  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.put(url, data, config);
  }

  // TODO: 整備
  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.get(url, config);
  }

  // TODO: 整備
  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.delete(url, config);
  }
}

export const prodClient = new ProdClient();
