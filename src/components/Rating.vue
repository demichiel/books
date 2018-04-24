<template>
  <span>
      <i class="fas fa-star" v-for="n in fullStars" :key="n"></i><i class="far fa-star" v-for="n in emptyStars" :key="10 + n"></i>
  </span>
</template>

<script>
export default {
  props: ["rating"],
  computed: {
      fullStars () {
          return parseInt(this.rating)
      },
      emptyStars () {
          return 5 - this.rating
      }
  },
}
</script>
