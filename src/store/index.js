import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
  // state
  state:() => ({
    count: 0
  }),
  // computed attr for state
  getters: {
    double(state) {
      return state.count * 2
    }
  },
  // actions can be asynchronous
  actions: {
    increment() {
      this.count++
    },
    delayIncrease() {
      setTimeout(()=> {
        this.count++
      }, 2000)
    }
  }
})

export const useUsersStore = defineStore('users', {
  state: () => ({
    isLogin: false
  }),
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        if(username === 'admin' && password === 'admin') {
          this.isLogin = true
          window.localStorage.setItem('isLogin', true)
          resolve()
        } else {
          this.isLogin = false
          window.localStorage.removeItem('isLogin')
          reject()
        }
      })
    }
  }
})