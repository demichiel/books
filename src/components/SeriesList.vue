<template>
    <div class="">
        <SerieCard v-for="serie in series.series" v-bind:serie="serie" :key="serie.id" />
        <router-link :to="`/series/add`">
          <button class="btn btn-outline-success mt-2 mb-2"><i class="fas fa-plus"></i> Add Series</button>
        </router-link>
    </div>
</template>

<script>
import store from "../store";
import SerieCard from "../components/SerieCard.vue";

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

