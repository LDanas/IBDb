<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} by {{ book.author }} - Rating: {{ book.rating }}
      </li>
    </ul>
  </div>
</template>

<script>
import BookService from '../services/BookService';

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    BookService.getAllBooks().then((response) => {
      this.books = response.data;
    });
  },
};
</script>
