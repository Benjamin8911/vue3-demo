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
    <h4>Info</h4>
    <el-button @click="addPerson">add person</el-button>
    <ul>
      <li :key="item.name" v-for="item in list">Name:{{item.name}}-Age:{{item.age}}</li>
    </ul>
  </div>
</template>
<script setup>
// If want to use destructuring
// use storeToRefs wrap the store from pinia to keep its reactivity
import { ref, reactive } from 'vue'
import {useCounterStore, useUsersStore} from '@/store/index'
import { ElMessage } from 'element-plus'
const counterStore = useCounterStore()
const usersStore = useUsersStore()
const name = ref("I'm Benjamin a front end web developer")
const list = reactive([{name: 'Ben', age: 32}])
const addPerson = () => {
  // list is read only here we can use list.value
  list.value = list.push({name: 'XXX', age: 100})
}
const change = () => {
  counterStore.increment()
}
const delayChange = () => {
  counterStore.delayIncrease()
}
const incrementAndPrint = () => {
  counterStore.increment()
  ElMessage({
    message: 'through methods to increase count',
    type: 'success'
  })
}
const showLower = () => {
  name.value = name.value.toLowerCase()
  ElMessage({
    message: 'Lowercase success',
    type: 'success'
  })
}
const showUpper = () => {
  name.value = name.value.toUpperCase()
  ElMessage({
    message: 'Uppercase success',
    type: 'success'
  })
};
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