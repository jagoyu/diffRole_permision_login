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
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('login');
      //网络请求
    }
  }
}
</script>
