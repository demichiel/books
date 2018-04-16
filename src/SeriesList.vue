<template>
    <div class="card-deck">
        <SerieCard v-for="serie in series.series" v-bind:serie="serie" :key="serie.id" />
    </div>
</template>

<script>
import store from "./store";
import SerieCard from "./SerieCard.vue";

export default {
  computed: {
    series() {
      return store.state.series;
    }
  },
  components : {
      SerieCard
  }
};
</script>

