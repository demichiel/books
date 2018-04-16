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
  },
  getters: {
    getSeriesById: (state) => (id) => {
      return state.series.series.find(s => s.id === id)
    }
  }
})

export default store
