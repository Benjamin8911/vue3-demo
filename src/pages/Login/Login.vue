<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box__user">
        <h4>Username</h4>
        <el-input v-model="username" placeholder="Please input username" />
      </div>
      <div class="login-box__pwd">
        <h4>Password</h4>
        <el-input v-model="password" type="password" placeholder="Please input password" />
      </div>
      <div class="login-box__login"><el-button @click="login">Login</el-button></div>
    </div>
  </div>
</template>
<script setup>
  import {ref} from 'vue'
  import {useUsersStore} from '@/store/index'
  import { ElMessage } from 'element-plus'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const userStore = useUsersStore()
  const username = ref('')
  const password = ref('')
  const login = () => {
    const result = userStore.login(username.value, password.value)
    result.then(res => {
      router.push({path: '/home'})
    }, err => {
      ElMessage({
        message: 'login fault'
      })
    })
  };
</script>
<style lang="sass">
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: lightskyblue;
  
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 400px;
    padding: 40px 30px;
    background-color: #fff;
    transform: translate(-50%, -50%);

    h4 {
      margin-bottom: 8px;
      line-height: 24px;
      font-size: 24px;
    }

    .el-input {
      margin-bottom: 8px;  
    }

    button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>