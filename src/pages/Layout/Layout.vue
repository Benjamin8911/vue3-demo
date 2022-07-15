<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>