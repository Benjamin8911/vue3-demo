import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Context from '../pages/Context/Context.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/context',
    component: Context
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router