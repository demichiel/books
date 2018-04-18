<template>
  <div id="app">
    <div class="container">
      <Nav />
      <div class="jumbotron">
        <h1 class="display-4">Leeslijst</h1>
        <p class="lead">A place to keep track of the books I'm reading</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "../store"
import SeriesList from '../components/SeriesList.vue'
import Nav from '../components/Nav.vue'

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
