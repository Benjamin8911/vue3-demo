<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>