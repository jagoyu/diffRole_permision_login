<template>
  <div>
    <span>账号：</span>
    <input type="text" name="account" v-model.trim="account">
    <br/>
    <span>密码：</span>
    <input type="password" name="password" v-model.trim="password" @keyup.enter="login">
    <br/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { login } from '../../api'
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async login() {
      //网络请求
      let res = await login(this.account)
      if (res.code === 0) {
        let token = res.data.token
        // token存储  -- 本地  -- vuex
        this.$store.commit('LOGIN_IN',token)
        this.$message.success(res.message)
        this.$router.replace('/')
      }
    }
  }
}
</script>
