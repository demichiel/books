<template>
    <div class="card" style="width: 8rem;">
        <img class="card-img-top" v-bind:src="imageURL" alt="header image" />
        <div class="card-body">
            <h5 class="card-title">{{ book.name }}</h5>
            <p class="card-text">{{ book.description }}</p>
            <p class="card-text"><strong>ISBN: </strong>{{ book.ISBN }}</p>
            <p class="card-text" v-if="read"><strong>Read: Yes</strong></p>
        </div>
    </div>  
</template>

<script>
    export default {
      props: ["book"],
      computed: {
        imageURL() {
          return this.book.imglink;
        },
        read() {
            return this.book.read
        }
      }
    };
</script>
