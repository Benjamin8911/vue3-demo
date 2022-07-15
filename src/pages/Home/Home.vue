<template>
  <div class="home">
    <h1>Home</h1>
    <p>Home Content</p>
    <p>data from store-count:{{counterStore.count}}</p>
    <p>data from store-double count:{{counterStore.double}}</p>
    <el-button type="danger" @click="change">add</el-button>
    <el-button type="danger" @click="delayChange">delay 2s add</el-button>
    <el-button type="danger" @click="incrementAndPrint">component methods add</el-button>
    <p>data from vue instance data：{{name}}</p>
    <el-button type="primary" @click="showLower">Show Lowercase</el-button>
    <el-button type="primary" @click="showUpper">Show Uppercase</el-button>
  </div>
</template>
<script>
// If want to use destructuring
// use storeToRefs wrap the store from pinia to keep its reactivity
import {useCounterStore, useUsersStore} from '@/store/index'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const counterStore = useCounterStore()
    const usersStore = useUsersStore()
    const change = () => {
      counterStore.increment()
    }
    const delayChange = () => {
      counterStore.delayIncrease()
    }
    console.log(usersStore.isLogin)
    return {counterStore, usersStore, change, delayChange}
  },
  data() {
    return {
      name: "I'm Benjamin a front end web developer."
    }
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      ElMessage({
        message: 'through methods to increase count',
        type: 'success'
      })
    },
    showLower() {
      this.name = this.name.toLowerCase()
      ElMessage({
        message: 'Lowercase success',
        type: 'success'
      })
    },
    showUpper() {
      this.name = this.name.toUpperCase()
      ElMessage({
        message: 'Uppercase success',
        type: 'success'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  padding: 80px 0;
  font-size: 40px;
  color: #fff;
  background: url('@/assets/img/123.jpeg') no-repeat left top;
  background-size: cover;
}
</style>