<template>
    <div class="app">
        <h1>Add new book</h1>
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
                <label class="col-sm-2 col-form-label" for="inlineCheckbox2">Read</label>
                <div class="col-sm-10">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" v-model="book.read" style="display: block">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputWikiLink" class="col-sm-2 col-form-label">Wiki link</label>
                <div class="col-sm-10">
                <input type="url" class="form-control" id="inputWikiLink" v-model="book.wikilink" placeholder="http://wikipedia.com">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImgLink" class="col-sm-2 col-form-label">Image link</label>
                <div class="col-sm-10">
                <input type="url" class="form-control" id="inputImgLink" v-model="book.imglink" placeholder="http://wikipedia.com/image.jpg">
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
                    <button type="button" class="btn btn-success" @click="addBook"><i class="fas fa-plus"></i> Add Book</button>
                    <button type="button" class="btn btn-danger" @click="cancel"><i class="fa fa-ban"></i> Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import store from "../store";
import Nav from "../components/Nav.vue";

export default {
  data() {
    return {
      book: {}
    };
  },
  computed: {
    seriesId() {
      return parseInt(this.$route.params.seriesId);
    }
  },
  methods: {
    addBook() {
      this.book.id = store.getters.getHighestId + 1
      store.commit("addBookToSeries", {
          seriesId: this.seriesId, 
          book: this.book
          });
      store.commit("saveToLocalStorage");
      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    }
  },
  created() {
    this.book = {
      title: "",
      description: "",
      ISBN: "",
      numberInSeries: 0,
      read: false,
      wikilink: "",
      imglink: ""
    };
  }
};
</script>


