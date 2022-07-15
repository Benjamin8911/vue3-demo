<template>
  <div class="demo">
    <ul class="demo-menu">
      <li class="demo-menulink"><router-link to="/demo/demo1">Demo1</router-link></li>
      <li class="demo-menulink"><router-link to="/demo/demo2">Demo2</router-link></li>
      <li class="demo-menulink"><router-link to="/demo/demo3">Demo3</router-link></li>
      <li class="demo-menulink"><router-link to="/demo/demo4">Demo4</router-link></li>
    </ul>
    <div class="demo-route">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo {
    display: flex;
    height: 100vh;
    padding: 80px 0;
    overflow: hidden;
  }

  .demo-menu {
    width: 200px;
    background-color: lightseagreen;
  }

  .demo-menulink {
    padding: 0 20px;
    font-size: 20px;
  }

  .demo-route {
    width: 100%;
  }
</style>
