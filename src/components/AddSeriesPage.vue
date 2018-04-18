<template>
    <div class="app">
        <h1>Add New Serie</h1>
        <form>
            <div class="form-group row">
                <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputTitle" placeholder="Title" v-model="serie.name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputDesc" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                <textarea type="text" class="form-control" id="inputDescription" placeholder="Description" v-model="serie.description" rows="5" />
                </div>
            </div>
            <div class="form-group row">
                <label for="inputAuthor" class="col-sm-2 col-form-label">Author</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputAuthor" placeholder="Author" v-model="serie.author">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPublisher" class="col-sm-2 col-form-label">Publisher</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPublisher" placeholder="Publisher" v-model="serie.publisher">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputNumber" class="col-sm-2 col-form-label">Number of Books in Series</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" id="inputNumber" placeholder="1" v-model="serie.numberOfBooks">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputWikiLink" class="col-sm-2 col-form-label">Wiki link</label>
                <div class="col-sm-10">
                <input type="url" class="form-control" id="inputWikiLink" v-model="serie.wikilink">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImgLink" class="col-sm-2 col-form-label">Image link</label>
                <div class="col-sm-10">
                <input type="url" class="form-control" id="inputImgLink" v-model="serie.imglink">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImgLink" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                    <img :src="serie.imglink"  style="width: 10rem;" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2">

                </div>
                <div class="col-sm-10">
                    <button type="button" class="btn btn-success" @click="addSerie"><i class="fas fa-plus"></i> Add Series</button>
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
      serie: {}
    };
  },
  methods: {
    addSerie() {
      console.log('Enter AddSeriesPage addSerie()')
      console.log(this.serie)
      store.commit('addSeries', this.serie)
      store.commit('saveToLocalStorage')
      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    }
  },
  created() {
    this.serie = {
      name: "",
      description: "",
      author: "",
      numberOfBooks: 0,
      books: [],
      publisher: "",
      wikilink: "",
      imglink: ""
    };
  }
};
</script>


