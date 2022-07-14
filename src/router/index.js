import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Contact from '../pages/Contact/Contact.vue'
import Demo from '../pages/Demo/Demo.vue'
import Demo1 from '@/pages/Demo/Demo1/Demo1.vue'
import Demo2 from '@/pages/Demo/Demo2/Demo2.vue'
import Demo3 from '@/pages/Demo/Demo3/Demo3.vue'
import Demo4 from '@/pages/Demo/Demo4/Demo4.vue'

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
    path: '/contact',
    component: Contact
  },
  {
    path: '/demo',
    component: Demo,
    children: [
      {
        path: 'demo1',
        component: Demo1
      },
      {
        path: 'demo2',
        component: Demo2
      },
      {
        path: 'demo3',
        component: Demo3
      },
      {
        path: 'demo4',
        component: Demo4
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router