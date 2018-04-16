import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import SeriePage from './SeriePage.vue'
import SeriesList from './SeriesList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: SeriesList},
  { path: '/series', component: App}, 
  { path: '/series/:id', component: SeriePage}, 
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
