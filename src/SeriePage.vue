<template>
    <div id="app">
    <div class="container">
        <h2>{{ serie.name }}</h2>
        <div class="row">
          <div class="col-md-3">
            <h5 class="text-right">Author</h5>
          </div>
          <div class="col">
            <h5>{{ serie.author }}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h5 class="text-right">Description</h5>
          </div>
          <div class="col">
            <h5>{{ serie.description }}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h5 class="text-right">Publisher</h5>
          </div>
          <div class="col">
            <h5>{{ serie.publisher }}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h5 class="text-right">Number of books</h5>
          </div>
          <div class="col">
            <h5>{{ serie.numberOfBooks }}</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h5 class="text-right">Books</h5>
          </div>
          <div class="col">
            <book-card v-for="book in serie.books" v-bind:book="book" :key="book.id" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import store from "./store"
import Nav from './Nav.vue'
import BookCard from './BookCard.vue'

export default {
  computed: {
    serie () {
      return store.getters.getSeriesById(parseInt(this.$route.params.id))
    },
  },
  components: {
      Nav,
      BookCard,
  }
};
</script>
