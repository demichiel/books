<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse" id="navbarText">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" v-for="serie in series" :key="serie.id">
                <router-link :to="`/series/${serie.id}`" class="nav-link">{{ serie.name }}</router-link>
            </li>
        </ul>
  </div>
  </nav>
</template>

<script>
import store from "./store"
export default {
  computed: {
    series() {
      return store.state.series.series;
    }
  }
};
</script>
