# nuxt-practice-ca-like

## 手順

### install dependencies

```bash
% npm i
```

### mockを使用した開発

```markdown
1. .env.local.js を作成
2. 以下のように API_URL を指定する

module.exports = {
  API_URL: 'http://localhost:8881',
};

3. `npm run local` を叩く
4. http://localhost:3000 にアクセス
```

### ローカルサーバーを立てた開発

```markdown
1. .env.development.js を作成
2. API_URL を指定
3. `npm run dev` を叩く
4. ローカルサーバーを立てる
5. http://localhost:3000 にアクセス
```

### 本番

```markdown
1. .env.production.js を作成
2. API_URL を指定
3. `npm run prod` を叩く
```

### jest

```markdown
% npm run test
```

## TODO

- Domain Layer の見直し
- DIコンテナの作り直し
- Request(args)型の持たせ方
- storeへ移行
- unit test
- e2e test
