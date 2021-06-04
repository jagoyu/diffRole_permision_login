
<template>
  <div>
    <div>
      <span><i>40</i></span>
    </div>
    <div>
      <span>iwen</span>
      <el-dropdown trigger="click" placement="top">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div @click="loginOut">
      <span>退出</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  }
}
</script>
