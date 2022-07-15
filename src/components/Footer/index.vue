<template>
  <div class="footer">
    <span>data from Provider:{{message}}</span>
    <el-button @click="changeMsg">ChangMsg</el-button>
  </div>
</template>
<script setup>
import { inject } from 'vue'
const message = inject('message')
const changeMsg = inject('changeMsg');
</script>
<style lang="sass" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 20px;
  background-color: lightslategray;
}
</style>