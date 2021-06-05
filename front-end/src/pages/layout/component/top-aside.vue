
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    <el-button type="info" @click="loginOut">退出</el-button>
  </el-menu>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      loginOut() {
        this.$store.commit('LOGIN_OUT')
        // this.CLEAR_PERIMISSION()
        // this.CLEAR_MENU()
        // this.$router.replace('/')
      }
    },
    computed: {
    //   ...mapMutations(
    //     '../../../store/modules/index', [
    //       'CLEAR_PERIMISSION',
    //       'CLEAR_MENU'
    //     ]
    //   )
    // }
}
</script>

<style scoped>
</style>
