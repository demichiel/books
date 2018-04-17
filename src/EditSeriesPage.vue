<template>
    <div class="app">
        <h1>Edit {{ serie.name }}</h1>
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
                <div class="col-sm-2">

                </div>
                <div class="col-sm-10">
                    <button type="button" class="btn btn-primary" @click="editBook"><i class="fas fa-pencil-alt"></i> Edit Series</button>
                    <button type="button" class="btn btn-danger" @click="cancel"><i class="fa fa-ban"></i> Cancel</button>
                </div>
            </div>
    </form>
    </div>
</template>

<script>
import store from "./store";
import Nav from "./Nav.vue";

export default {
  data() {
    return {
      serie: {}
    };
  },
  created() {
    this.serie = store.getters.getSeriesById(parseInt(this.$route.params.seriesId));
  },
  components: {
    Nav
  },
  methods: {
    editBook() {
      store.commit('replaceSeries', this.serie);
      store.commit('saveToLocalStorage')
      this.$router.go(-1)
    },
    cancel() {
      this.$router.go(-1)
    }
  }
};
</script>