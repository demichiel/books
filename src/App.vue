<template>
  <div id="app">
    <div class="container">
      <Nav />
      <div class="jumbotron">
        <h1 class="display-4">Books I've Read</h1>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "./store"
import SeriesList from './SeriesList.vue'
import Nav from './Nav.vue'

export default {
  name: "app",
  computed: {
    series() {
      return store.state.series;
    }
  },
  components : {
    SeriesList,
    Nav,
  }
}
</script>

<style>

</style>
