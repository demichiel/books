<template>
    <div class="card mt-2">
        <div class="card-header">
            <router-link :to="`/series/${serie.id}`"><h5 class="card-title">{{ serie.name }}</h5></router-link>
        </div>
       
        <div class="card-body row">
            <div class="col-2">
                <img class="img-fluid" v-bind:src="imageURL" alt="header image" />
                <div class="progress mt-2" style="height: 20px;">
                    <div class="progress-bar bg-secondary" role="progressbar" :aria-valuenow="booksReadInSerie" aria-valuemin="0" :aria-valuemax="serie.numberOfBooks"
                        :style="`width: ${computePercentage}%`">
                        {{ booksReadInSerie }} / {{ serie.numberOfBooks }}
                    </div>
                </div>
            </div>
            <div class="col">
            <h5 class="card-title">{{ serie.name }}</h5>
            <p class="card-text lead">{{ serie.description }}</p>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
      props: ["serie"],
      computed: {
        imageURL() {
          return this.serie.imglink;
        },
        booksReadInSerie() {
            return this.serie.books.filter(b => b.read === true).length
        },
        computePercentage() {
            return Math.floor((this.serie.books.filter(b => b.read === true).length / this.serie.numberOfBooks) * 100)
        }
      }
    };
</script>
