import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { saveFeedback } from '@/services/feedbacks.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
// saveFeedback(userName)
export default new Vuex.Store({
  state: {
    updateKey: false
  },
  mutations: { // here we do something with state
    updateOne (state) {
      state.updateKey = !state.updateKey
    }
  },
  actions: { // from here we will dispatch what we need to do
    // must content logic with {mutations}?
    // here do commit
    updateOne (context) {
      context.commit('updateOne')
    }
  },
  modules: {
  }
})
