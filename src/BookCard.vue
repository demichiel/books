<template>
    <div class="card float-left m-1" style="width: 15rem;" ref="thecard">
        <img class="card-img-top" v-bind:src="imageURL" alt="header image" />
        <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.description }}</p>
            <p class="card-text"><strong>ISBN: </strong>{{ book.ISBN }}</p>
            <p class="card-text" v-if="read"><strong>Read: Yes</strong></p>
        </div>
        <div class="card-footer">
            <router-link :to="`/books/edit/${book.id}`">
            <button class="btn btn-outline-primary float-left"><i class="fas fa-pencil-alt"></i> Edit</button>
            </router-link>
            <button class="btn btn-outline-danger float-right" @click="deleteBook"><i class="fas fa-trash"></i> Delete</button>
        </div>
    </div>  
</template>

<script>
    import store from "./store";

    export default {
      props: ["book"],
      computed: {
        imageURL() {
          return this.book.imglink;
        },
        read() {
          return this.book.read;
        }
      },
      methods: {
        deleteBook() {
          this.$refs.thecard.setAttribute('class', 'card float-left m-1 text-white bg-danger')
          if (confirm("Are you sure you want to delete " + this.book.name + "?")) {
            store.commit("deleteBookById", this.book.id);
          }
          this.$refs.thecard.setAttribute('class', 'card float-left m-1')
        }
      }
    };
</script>
