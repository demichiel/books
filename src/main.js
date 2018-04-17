import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store'
import SeriePage from './components/SeriePage.vue'
import SeriesList from './components/SeriesList.vue'
import EditBookPage from './components/EditBookPage.vue'
import AddBookPage from './components/AddBookPage.vue'
import EditSeriesPage from './components/EditSeriesPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: SeriesList},
  { path: '/series/:id', component: SeriePage}, 
  { path: '/series/:seriesId/books/:id', component: EditBookPage}, 
  { path: '/series/:seriesId/add', component: AddBookPage}, 
  { path: '/series/:seriesId/edit', component: EditSeriesPage}, 
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  computed: {
    series () {
      return store.state.series
    }
  },
  created () {
    if (!localStorage.getItem('series')) {
      store.commit('resetSeries')
      store.commit('saveToLocalStorage')
    } else {
      store.commit('loadFromLocalStorage')
    }
  },
})
