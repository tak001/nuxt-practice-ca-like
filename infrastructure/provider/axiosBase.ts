import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { objectKeysToCamel, objectKeysToKebab } from '@/utils/changeCase';

const client = axios.create({
  // ブラウザのSessionCookieなどをaxiosでそのままサーバーに送信する
  withCredentials: true,
  headers: {
    'X-Origin': location.hostname,
    'X-Protocol': location.protocol,
  },
});

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.data = objectKeysToKebab(config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use((response: AxiosResponse) => {
  // キャメルケースに変換
  response.data = objectKeysToCamel(response.data);

  return response;
});

export default client;
