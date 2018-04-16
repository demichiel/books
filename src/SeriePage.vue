<template>
    <div id="app">
    <div class="container">
        <h1 class="display-4">{{ serie.name }}</h1>
    </div>
  </div>
</template>

<script>
import store from "./store"
import Nav from './Nav.vue'

export default {
  computed: {
    serie () {
      return store.getters.getSeriesById(parseInt(this.$route.params.id))
    },
  },
  components: {
      Nav,
  }
};
</script>
