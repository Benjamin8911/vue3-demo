import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '@/pages/Login/Login.vue'
import Layout from '@/pages/Layout/Layout.vue'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Contact from '../pages/Contact/Contact.vue'
import Demo from '../pages/Demo/Demo.vue'
import Demo1 from '@/pages/Demo/Demo1/Demo1.vue'
import Demo2 from '@/pages/Demo/Demo2/Demo2.vue'
import Demo3 from '@/pages/Demo/Demo3/Demo3.vue'
import Demo4 from '@/pages/Demo/Demo4/Demo4.vue'
import {useUsersStore} from '@/store/index'

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/demo',
        name: 'Demo',
        component: Demo,
        children: [
          {
            path: '',
            component: Demo1
          },
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
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to,from,next) => {
  const usersStore = useUsersStore()
  if(to.path === '/login') return next()
  if(!window.localStorage.getItem('isLogin')) return next('/login')
  return next()
})

export default router