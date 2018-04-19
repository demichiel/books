<template>
    <div class="">
        <BookCard v-for="book in books" v-bind:book="book" :key="book.id" />
    </div>
</template>

<script>
import store from "../store";
import BookCard from "../components/BookCard.vue";

export default {
  computed: {
    books() {
      return store.getters.getCurrentlyReading;
    }
  },
  components : {
      BookCard
  }
};
</script>

