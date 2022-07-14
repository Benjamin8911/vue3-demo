<template>
  <div class="home">
    <h1>Home</h1>
    <p>Home Content</p>
    <p>data from store:{{counter.count}}</p>
    <el-button type="danger" @click="change">add</el-button>
    <p>data from vue instance data：{{name}}</p>
    <el-button type="primary" @click="showLower">Show Lowercase</el-button>
    <el-button type="primary" @click="showUpper">Show Uppercase</el-button>
  </div>
</template>
<script>
import {useCounterStore} from '@/store/index'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const counter = useCounterStore()
    
    const change = () => {
      counter.increment()
    }
    return {counter, change}
  },
  data() {
    return {
      name: 'Benjamin'
    }
  },
  methods: {
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