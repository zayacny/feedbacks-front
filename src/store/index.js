import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { getFeedbacks } from '@/services/feedbacks.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rowsFeedbacks: []
  },
  mutations: { // here we do something with state
    nmaeFeunc (state, data) {
      console.log('MUTATION have been done')
    },
    setFeedbacks (state, data) {
      state.rowsFeedbacks = data.rows;
    }

  },
  actions: {
    nmaeFeunc () {
      console.log('ACTION have been done')
    },
    // getFeedbacks GET
    async getFeedbacks ({ commit }) {
      const { data } = await axios.get('http://localhost:3000/feedbacks')
      commit('setFeedbacks', data);
    }
  },
  modules: {

  }
})
