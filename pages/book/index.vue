<template>
  <div>
    <h2>List</h2>
    <ul v-for="(book, i) in books" :key="i">
      <li>{{ book.title }}</li>
      <nuxt-link :to="{ name: 'book-detail-id', params: { id: book.id } }"
        ><button>詳細</button>
      </nuxt-link>
      <button @click="onClickDelete(book.id)">削除</button>
    </ul>
    <h3>新規追加</h3>
    <input v-model="form.title" type="text" placeholder="title" /><br />
    <input v-model="form.author" type="text" placeholder="author" /><br />
    <button @click="onClickAdd">追加</button>
    <p><nuxt-link to="/">to Top</nuxt-link></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bookUseCase from '@/application/books';
import Book from '@/domain/models/books/bookResponse';

interface Form {
  title: Book['title'];
  author: Book['author'];
}

interface DataType {
  form: Form;
  books: Book[];
}

export default Vue.extend({
  name: 'BookPage',
  async asyncData() {
    const books = await bookUseCase.findAll();
    return {
      books,
    };
  },
  data(): DataType {
    return {
      form: { title: '', author: '' },
      books: [],
    };
  },
  methods: {
    async onClickAdd() {
      await bookUseCase.post({ ...this.form });
      this.books = await bookUseCase.findAll();
      this.form = { title: '', author: '' };
    },
    async onClickDelete(bookId: number) {
      await bookUseCase.delete(bookId);
      this.books = await bookUseCase.findAll();
    },
  },
});
</script>
