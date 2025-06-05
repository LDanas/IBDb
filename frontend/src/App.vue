<template>
  <div id="app">
    <BookList />
    <ButtonColumn />
  </div>
</template>

<script>
import BookList from './components/BookList.vue';
import ButtonColumn from './components/ButtonColumn.vue';  // <-- import here

export default {
  components: {
    BookList,
    ButtonColumn,   // <-- register here
  },
};
</script>
