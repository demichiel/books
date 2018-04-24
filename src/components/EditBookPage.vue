<template>
    <div class="app">
        <h1>Edit {{ book.title }}</h1>
        <form>
            <div class="form-group row">
                <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputTitle" placeholder="Title" v-model="book.title">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputDescription" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                <textarea type="text" class="form-control" id="inputDescription" placeholder="Description" v-model="book.description" rows="5" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputISBN" class="col-sm-2 col-form-label">ISBN</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputISBN" placeholder="ISBN" v-model="book.ISBN">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputNumber" class="col-sm-2 col-form-label"># In Series</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" id="inputNumber" placeholder="1" v-model="book.numberInSeries">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputNumber" class="col-sm-2 col-form-label">Rating</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" id="inputNumber" placeholder="1" v-model="book.rating" min="0" max="5">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="inlineCheckbox2">Read</label>
                <div class="col-sm-10 pt-2">
                  <div class="pretty p-icon p-smooth">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" v-model="book.read">
                    <div class="state p-primary">
                        <i class="icon fa fa-check"></i>
                        <label></label>
                    </div>
                  </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="inlineCheckbox3">Currently Reading</label>
                <div class="col-sm-10 pt-2">
                  <div class="pretty p-icon p-smooth">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" v-model="book.currentlyReading">
                    <div class="state p-primary">
                        <i class="icon fa fa-check"></i>
                        <label></label>
                    </div>
                  </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputWikiLink" class="col-sm-2 col-form-label">Wiki link</label>
                <div class="col-sm-10">
                <input type="url" class="form-control" id="inputWikiLink" placeholder="1" v-model="book.wikilink">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImgLink" class="col-sm-2 col-form-label">Image link</label>
                <div class="col-sm-10">
                <input type="url" class="form-control" id="inputImgLink" placeholder="1" v-model="book.imglink">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImgLink" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                    <img :src="book.imglink" style="width: 10rem;" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2">

                </div>
                <div class="col-sm-10">
                    <button type="button" class="btn btn-primary" @click="editBook"><i class="fas fa-pencil-alt"></i> Edit Book</button>
                    <button type="button" class="btn btn-danger" @click="cancel"><i class="fa fa-ban"></i> Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import store from "../store";
import Nav from "../components/Nav.vue";
import Rating from "../components/Rating.vue"

export default {
  data() {
    return {
      book: {}
    };
  },
  created() {
    this.book = store.getters.getBookById(parseInt(this.$route.params.id));
  },
  components: {
    Nav,
    Rating
  },
  methods: {
    editBook() {
      store.commit('replaceBook', this.book);
      store.commit('saveToLocalStorage')
      this.$router.go(-1)
    },
    cancel() {
      this.$router.go(-1)
    }
  }
};
</script>
