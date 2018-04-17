<template>
    <div id="app">
    <div class="container">
        <div class="row">
          <div class="col">
            <h2>{{ serie.name }}</h2>
          </div>
          <div class="col-md-3 text-right">
            <router-link :to="`/series/${serie.id}/edit`">
              <button class="btn btn-outline-primary"><i class="fas fa-pencil-alt"></i> Edit Series</button>
            </router-link>
          </div>
        </div>
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
            <p class="lead">{{ serie.description }}</p>
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
            <h5 class="text-right">Add Book to {{ serie.name }}</h5>
          </div>
          <div class="col">
            <router-link :to="`/series/${serie.id}/add`">
              <button class="btn btn-outline-success"><i class="fas fa-plus"></i> Add Book</button>
            </router-link>
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
import AddBookPage from './AddBookPage.vue'

export default {
  computed: {
    serie () {
      return store.getters.getSeriesById(parseInt(this.$route.params.id))
    },
  },
  components: {
      Nav,
      BookCard,
      AddBookPage,
  }
};
</script>
