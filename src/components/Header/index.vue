<template>
  <div class="header">
    <span @click="show">{{title? title : 'Logo'}}</span>
    <router-link to="/home">Home</router-link>&nbsp;
    <router-link to="/about">About</router-link>&nbsp;
    <router-link to="/contact">Contact</router-link>&nbsp;
    <router-link to="/demo">Demo</router-link>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  title: String
})
// const {title} = toRefs(props)
const emit = defineEmits(['show'])
const show = () => {
  emit('show', 'some thing pass to father')
};

</script>
<style lang="sass" scoped>
.header {
  /* css note */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  line-height: 80px;
  font-size: 20px;
  border-bottom: 1px solid #fff;
  background: lightblue;
  transform: translate(0,0);
  a {
    color: #000;
  }
}
</style>
