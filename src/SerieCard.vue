<template>
    <div class="card" style="width: 8rem;">
        <router-link :to="`/series/${serie.id}`"><img class="card-img-top" v-bind:src="imageURL" alt="header image" /></router-link>
        <div class="card-body">
            <h5 class="card-title">{{ serie.name }}</h5>
            <p class="card-text">{{ serie.description }}</p>
        </div>
        <div class="card-footer">
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="booksReadInSerie" aria-valuemin="0" :aria-valuemax="serie.numberOfBooks"
                    :style="`width: ${computePercentage}%`">
                    {{ booksReadInSerie }} / {{ serie.numberOfBooks }}
                </div>
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
