<template>
    <div class="card mt-2" ref="thecard">
        <!-- <img class="card-img-top" v-bind:src="imageURL" alt="header image" /> -->
          <div class="card-header">
            <h5 class="card-title">{{ book.numberInSeries }} - {{ book.title }}</h5>
          </div>
          <div class="card-body row">
            
        <div class="col-2">
          <img class="img-fluid" v-bind:src="imageURL" alt="header image" />
        </div>
        <div class="col-10">
              <p class="card-text mb-1" style="white-space: pre-line;">{{ book.description }}</p>
              <p class="card-text mb-1"><strong>ISBN: </strong>{{ book.ISBN }}</p>
              <p class="card-text mb-1" v-if="book.read"><strong>Read:</strong> Yes</p>
              <p class="card-text mb-1" v-if="!book.read"><strong>Read:</strong> No</p>
              <div class="pretty p-icon p-smooth mb-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" v-model="book.currentlyReading" @click="currentlyReadingClicked">
                  <div class="state p-primary">
                      <i class="icon fa fa-check"></i>
                      <label>Currently Reading</label>
                  </div>
                </div>
                <p class="card-text mb-1"><strong>Rating: </strong><Rating :rating="book.rating"></Rating></p>
                
              <a :href="book.wikilink" class="d-block"><button class="btn btn-outline-secondary"><i class="fab fa-wikipedia-w"></i> Wikipedia</button></a>
          </div>
        </div>
          <div class="card-footer">
              <router-link :to="`/series/${parseInt(this.$route.params.id)}/books/${book.id}`">
                <button class="btn btn-outline-primary float-left"><i class="fas fa-pencil-alt"></i> Edit</button>
              </router-link>
              <button class="btn btn-outline-danger float-right" @click="deleteBook"><i class="fas fa-trash"></i> Delete</button>
          </div>

    </div>  
</template>

<script>
import store from "../store";
import Rating from "./Rating.vue"

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
      this.$refs.thecard.setAttribute(
        "class",
        "card float-left m-1 text-white bg-danger"
      );
      if (confirm("Are you sure you want to delete " + this.book.title + "?")) {
        store.commit("deleteBookById", this.book.id)
        store.commit('saveToLocalStorage')
      }
      this.$refs.thecard.setAttribute("class", "card float-left m-1")
    },
    currentlyReadingClicked() {
      store.commit('saveToLocalStorage')
    }
  },
  components: {
    Rating
  }
};
</script>

<style>

</style>
