<template>
  <section class="parentCard">
    <el-card>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="account">
          <el-input v-model.trim="form.account" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script>
import { loginApi } from 'api'
export default {
  data() {
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }       
        ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(async (valid)=>{
        if (valid) {
          //网络请求
          let res = await loginApi.login(this.form)
          if (res.code === 0) {
            let token = res.data.token
            // token存储  -- 本地  -- vuex
            this.$store.commit('LOGIN_IN',token)
            this.$message.success(res.message)
            this.$router.push('/')
          } else {
            this.$message.error(res.ErrMes)
          }
          return true
        } else {
          this.$message.error('请重新填写表单')
          return false
        }
      })
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