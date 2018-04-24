<template>
  <div id="app">
    <div class="container mb-3">
      <Nav />
      <div class="jumbotron" @click="restartAnimation">
        <div class="row">
          <div class="col-2"><object id="my-svg" type="image/svg+xml" :data="require('../assets/book.svg')"></object></div>
          <div class="col">
        <h1 class="display-4">Leeslijst</h1>
        <p class="lead">A place to keep track of the books I'm reading</p></div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "../store"
import SeriesList from '../components/SeriesList.vue'
import Nav from '../components/Nav.vue'
import Vivus from 'vivus'

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
  },
  mounted() {
    new Vivus('my-svg', {
      type: 'oneByOne',
      duration: 200,
      animTimingFunction: Vivus.EASE,
    })
  },
  methods: {
    restartAnimation () {
      var viv = new Vivus('my-svg', {
        type: 'oneByOne',
        duration: 100,
        animTimingFunction: Vivus.EASE,
      })
      viv.reset()
    }
  }
}
</script>

<style>

</style>
