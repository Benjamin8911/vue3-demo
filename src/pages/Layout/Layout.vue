<template>
  <div>
    <Header title="logo" @show="show"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { provide, ref } from 'vue'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import { ElMessage } from 'element-plus'
const message = ref("Footer, I'm footer!")
const changMsg = () => {
  message.value = 'Changed'
}
provide('message', message)
provide('changeMsg',changMsg)
const show = (params) => {
  ElMessage({
    message: `get the payload: ${params}`,
    type: 'success'
  })
}
</script>