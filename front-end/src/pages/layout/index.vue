<template>
  <el-container class="my-container">
    <el-header>
      <topAside class="my-top-aside"/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebarNav class="my-side-nav"/>
      </el-aside>
      <el-main>
        <priContent/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import priContent from './component/pricontent'
import topAside from './component/top-aside'
import sidebarNav from './component/sidebar-nav'
export default {
  data() {
    return {}
  },
  components: {
    sidebarNav,
    topAside,
    priContent
  }
}
</script>

<style scoped>
.my-container {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
}
.my-side-nav{
  height: 100%;
}
.my-top-aside {
  display: flex;
  justify-content: flex-end;
}
</style>
