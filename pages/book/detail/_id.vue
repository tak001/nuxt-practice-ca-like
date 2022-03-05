<template>
  <div>
    <h2>詳細</h2>
    <input v-model="book.title" type="text" />
    <input v-model="book.author" type="text" />
    <button @click="onClickEdit">修正</button>
    <nuxt-link :to="{ name: 'book' }"><p>Book List</p></nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import bookUseCase from '@/application/books';
import Book from '@/domain/models/books/bookResponse';

interface DataType {
  book: Book;
}

export default Vue.extend({
  name: 'BookDetail',
  async asyncData({ route }) {
    const bookId = Number(route.params.id);
    const book = await bookUseCase.find(bookId);
    return {
      book,
    };
  },
  data(): DataType {
    return {
      book: {
        id: 0,
        title: '',
        author: '',
      },
    };
  },
  methods: {
    async onClickEdit() {
      const bookId = Number(this.$route.params.id);
      await bookUseCase.put({ id: bookId, book: this.book });
      this.$router.push({ name: 'book' });
    },
  },
});
</script>
