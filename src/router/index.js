import {createRouter, createWebHashHistory} from 'vue-router'
import {useUsersStore} from '@/store/index'

const loadRoute = (dir, route) => {
  return () => import(`@/pages/${dir}/${route}.vue`)
}

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: loadRoute('Login', 'Login')
  },
  {
    path: '/login',
    name: 'Login',
    component: loadRoute('Login', 'Login')
  },
  {
    path: '/home',
    component: loadRoute('Layout', 'Layout'),
    children: [
      {
        path: '/home',
        component: loadRoute('Home', 'Home')
      },
      {
        path: '/about',
        component: loadRoute('About', 'About')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: loadRoute('Contact', 'Contact')
      },
      {
        path: '/demo',
        name: 'Demo',
        redirect: '/demo/demo1',
        component: loadRoute('Demo', 'Demo'),
        children: [
          {
            path: 'demo1',
            component: loadRoute('Demo/Demo1', 'Demo1')
          },
          {
            path: 'demo2',
            component: loadRoute('Demo/Demo2', 'Demo2')
          },
          {
            path: 'demo3',
            component: loadRoute('Demo/Demo3', 'Demo3')
          },
          {
            path: 'demo4',
            component: loadRoute('Demo/Demo4', 'Demo4')
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
  // const usersStore = useUsersStore()
  if(to.path === '/login'){
    return next()
  }
  if(!window.localStorage.getItem('isLogin')){
    return next({path: '/login'})
  }
  next()
})

export default router