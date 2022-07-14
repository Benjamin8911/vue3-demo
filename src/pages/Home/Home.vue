<template>
  <div class="home">
    <div>Home</div>
    <p>Home Content</p>
    <p>data from store:{{counter.count}}</p>
    <el-button @click="change">add</el-button>
    <p>data from vue instance data：{{name}}</p>
  </div>
</template>
<script>
import {useCounterStore} from '@/store/index'
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
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 800px;
  font-size: 40px;
  color: #fff;
  background: url('@/assets/img/123.jpeg') no-repeat left top;
  background-size: contain;
}
</style>