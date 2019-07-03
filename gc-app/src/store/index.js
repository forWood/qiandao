import Vue from 'vue'
import Vuex from 'vuex'


import localStorage from './localStorage'
import user from './user'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    localStorage,
    user
  }
})
