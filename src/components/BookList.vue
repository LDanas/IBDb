<template>
  <div class="book-list">
    <h1>Book List</h1>
    <div class="book" v-for="book in books" :key="book.id">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
    </div>
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

<style scoped>
.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

.book {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.book:hover {
  transform: scale(1.02);
}

@media (max-width: 440px) {
  .book-list h1 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 30px;
  }

  .book {
    width: 95%;
    font-size: 13px;
    padding: 0.7rem;
  }
}
</style>
