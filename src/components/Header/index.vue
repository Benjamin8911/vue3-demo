<template>
  <div class="header">
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/about">About</router-link>&nbsp;
    <router-link to="/context">Contact</router-link>
  </div>
</template>
<style lang="less" scoped>
.header {
  /* css note */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  font-size: 20px;
  background-color: lightblue;
  transform: translate(0,0);
}
</style>
