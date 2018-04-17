<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse" id="navbarText">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link" exact>Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Series
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <router-link class="dropdown-item"  v-for="serie in series" :key="serie.id" :to="`/series/${serie.id}`" :style="{ cursor: 'pointer'}">{{ serie.name }}</router-link>
              </div>
            </li>
        </ul>
  </div>
  </nav>
</template>

<script>
  import store from "./store";
  export default {
    computed: {
      series() {
        return store.state.series.series;
      }
    }
  };
</script>
