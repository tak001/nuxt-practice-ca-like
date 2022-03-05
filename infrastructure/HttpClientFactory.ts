import { prodClient } from '@/infrastructure/provider/prodClient';
import { mockClient } from '@/infrastructure/provider/mockClient';

class HttpClientFactory {
  getClient() {
    if (process.env.NUXT_ENV_DEPLOYMENT === 'local') {
      return mockClient;
    }
    return prodClient;
  }
}

const httpClientFactory = new HttpClientFactory();

export default httpClientFactory;
