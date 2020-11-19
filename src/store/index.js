import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
// import { getFeedbacks } from '@/services/feedbacks.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rowsFeedbacks: []
  },

  mutations: { // here we do something with state via commit('some-mutation')
    setFeedbacks (state, data) {
      state.rowsFeedbacks = data
      console.log('setFeedbacks to rowsFeedbacks[]   {/mutations/STORE} done  ', this.state.rowsFeedbacks)
    }
  },

  actions: {
    // getFeedbacks GET
    async getFeedbacks ({ commit }) {
      const { data } = await axios.get('http://localhost:3000/allfeedbacks')
      console.log('response from server actions/store : ', data)
      commit('setFeedbacks', data)
    },
    // additionFeedback POST
    async oneFeedback (feedback) {
      const { data } = await axios.post('http://localhost:3000/feedbacks', { feedback })
      console.log('additionFeedback() done : ', feedback)
      return data
    },
    // saveUser  POST
    async saveUser (feedback) {
      console.log('services/ saveUser()  ', feedback.userName)
      const { data } = await axios.post('http://localhost:3000/feeduser', { name: feedback.userName })
      console.log('Saved User : ', data)
      return data
    }
  },
  getters: {
    getCountFeedbacks (state) {
      return state.rowsFeedbacks.length
    }
  }
})
