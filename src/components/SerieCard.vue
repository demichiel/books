<template>
    <div class="card mt-2 text-dark" ref="thecard">
        <div class="card-header">
            <router-link :to="`/series/${serie.id}`">
                <h5 class="card-title text-dark"><i class="fas fa-angle-double-right"></i> {{ serie.name }}</h5>
            </router-link>
        </div>
       
        <div class="card-body row">
            <div class="col-2">
            <router-link :to="`/series/${serie.id}`">
                <img class="img-fluid" v-bind:src="imageURL" alt="header image" />
            </router-link>
                <div class="progress mt-2" style="height: 20px;">
                    <div class="progress-bar bg-secondary" role="progressbar" :aria-valuenow="booksReadInSerie" aria-valuemin="0" :aria-valuemax="serie.numberOfBooks"
                        :style="`width: ${computePercentage}%`">
                        <small>
                        {{ booksReadInSerie }}/{{ serie.numberOfBooks }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col">
            <h5 class="card-title">{{ serie.name }}</h5>
            <p class="card-text lead" style="white-space: pre-line;">{{ serie.description }}</p>
            <a :href="serie.wikilink"><button class="btn btn-outline-secondary"><i class="fab fa-wikipedia-w"></i> Wikipedia</button></a>
            </div>
        </div>
        <div class="card-footer">
            <router-link :to="`/series/${parseInt(this.$route.params.id)}/edit`">
            <button class="btn btn-outline-primary float-left"><i class="fas fa-pencil-alt"></i> Edit</button>
            </router-link>
            <button class="btn btn-outline-danger float-right" @click="deleteSeries"><i class="fas fa-trash"></i> Delete</button>
        </div>
    </div>  
</template>

<script>
import store from "../store";

export default {
  props: ["serie"],
  computed: {
    imageURL() {
      return this.serie.imglink;
    },
    booksReadInSerie() {
      return this.serie.books.filter(b => b.read === true).length;
    },
    computePercentage() {
      return Math.floor(
        this.serie.books.filter(b => b.read === true).length /
          this.serie.numberOfBooks *
          100
      );
    }
  },
  methods: {
    deleteSeries() {
      this.$refs.thecard.setAttribute("class", "card float-left m-1 text-white bg-danger");
      if (confirm("Are you sure you want to delete " + this.serie.name + "?")) {
        store.commit("deleteSeriesById", this.serie.id);
        store.commit('saveToLocalStorage')
      }
      this.$refs.thecard.setAttribute("class", "card float-left m-1");
    }
  }
};
</script>
