import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: () => import('./components/About')
    },
    {
      path: '/write-review',
      component: () => import('./components/FormReview')
    },
    {
      path: '/donefeedback',
      component: () => import('./components/DoneFeedback')
    },
    {
      path: '/allfeedbacks',
      component: () => import('./components/AllFeedbacks')
    }
  ]
})
