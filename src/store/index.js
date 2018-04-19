import Vue from 'vue'
import Vuex from 'vuex'
import initialData from '../initialData.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      series: null
    }
  },
  mutations: {
    resetSeries(state) {
      state.series = initialData
    },
    saveToLocalStorage(state) {
      localStorage.setItem('series', JSON.stringify(state.series))
    },
    loadFromLocalStorage(state) {
      state.series = JSON.parse(localStorage.getItem('series'))
    },
    deleteBookById(state, id) {
      state.series.series.forEach(serie => {
        serie.books = serie.books.filter(book => book.id != id)
      })
    },
    replaceBook: (state) => (book) => {
      state.series.series.forEach(serie => {
        if (serie.books.find(b => b.id === book.id)) {
          serie.books = serie.book.filter(b => b.id != book.id)
          serie.books.push(book)
        }
      })
    },
    replaceSeries: (state) => (serie) => {
      state.series.series = series.series.filter(s => s.id != serie.id)
      state.series.series.push(serie)
    },
    addBookToSeries(state, {seriesId, book}) {
      state.series.series.find(s => s.id === seriesId).books.push(book)
    },
    addSeries(state, serie) {
      state.series.series.push(serie)
    },
  },
  getters: {
    getSeriesById: (state) => (id) => {
      return state.series.series.find(s => s.id === id)
    },
    getBookById: (state) => (id) => {
      let book
      state.series.series.forEach(serie => {
        if (serie.books.find(b => b.id === id)) {
          book = serie.books.find(b => b.id === id)
        }
      })
      return book
    },
    getSeriesIdByBook: (state) => (book) => {
      state.series.series.forEach(serie => {
        if (serie.books.find(b => b.id === book.id)) {
          return serie.id
        }
      })
    },
    getHighestId: (state) => {
      let id = 0
      state.series.series.forEach(serie => {
        if (serie.id > id) {
          id = serie.id
          serie.books.forEach(b => {
            if (b.id > id) {
              id = b.id
            }
          })
        }
      })
      return id
    }
  }
})

store.getMaxId = state => {      
  let id = 0
  state.series.series.forEach(serie => {
    if (serie.id > id) {
      id = serie.id
      serie.books.forEach(b => {
        if (b.id > id) {
          id = b.id
        }
      })
    }
  })
  return id
}

export default store
