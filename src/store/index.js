import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rowsFeedbacks: []
  },

  mutations: {
    setFeedbacks (state, data) {
      state.rowsFeedbacks = data
      console.log('setFeedbacks to rowsFeedbacks[]   {/mutations/STORE} done  ', this.state.rowsFeedbacks)
    }
  },

  actions: {
    // getFeedbacks GET
    async getFeedbacks ({ commit }) {
      const { data } = await axios.get('http://localhost:3000/allfeedbacks')
      commit('setFeedbacks', data)
    },
    // write feedback POST
    async writeFeedback (state, feedback) {
      const { data } = await axios.post('http://localhost:3000/feedbacks', { feedback })
      console.log('additionFeedback() done : ', feedback)
      return data
    },
    // save photo POST
    async savePhoto (state, fileImg) {
      var formData = new FormData()
      formData.append('fileImg', fileImg)
      const { data } = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return data
    },
    // save User  POST
    async saveUser (state, feedback) {
      const { data } = await axios.post('http://localhost:3000/users', { name: feedback.userName })
      return data
    },
    // save Company POST
    async saveCompany (state, feedback) {
      const { data } = await axios.post('http://localhost:3000/company', { name: feedback.orgName, address: feedback.address })
      return data
    }
  },
  getters: {
    getCountFeedbacks (state) {
      return state.rowsFeedbacks.length
    }
  }
})
