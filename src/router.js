import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Child from './views/Child.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name: 'child',
      path: '/child',
      component: Child
    }

  ]
})
