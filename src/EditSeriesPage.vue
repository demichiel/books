<template>
    <div class="app">
        <h1>Edit {{ serie.name }}</h1>
    </div>
</template>

<script>
import store from "./store";
import Nav from "./Nav.vue";

export default {
  data() {
    return {
      serie: {}
    };
  },
  created() {
    this.serie = store.getters.getSeriesById(parseInt(this.$route.params.seriesId));
  },
  components: {
    Nav
  },
  methods: {
  }
};
</script>