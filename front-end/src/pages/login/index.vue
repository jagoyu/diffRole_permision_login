<template>
  <section class="parentCard">
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model.trim="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model.trim="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script>
import { login } from '../../api'
export default {
  data() {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      //网络请求
      let res = await login(this.form.account)
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

<style scoped>
.parentCard {
  height: 100%;
  display: flex;
  align-items: center;
  background: url('../../assets/img/login-bg.jpeg') no-repeat center/100%;
}
.el-card {
  padding: 40px 20px 20px 40px;
  width: 600px;
  margin: 0 auto;
}
</style>