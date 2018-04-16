<template>
    <div class="card">
        <router-link :to="`/series/${serie.id}`"><img class="card-img-top" v-bind:src="imageURL" alt="header image" /></router-link>
        <div class="card-body">
            <h5 class="card-title">{{ serie.name }}</h5>
            <p class="card-text">{{ serie.description }}</p>
        </div>
    </div>  
</template>

<script>
export default {
    props: ['serie'],
    computed: {
        imageURL () {
            return this.serie.imglink
        }
    }
}
</script>
