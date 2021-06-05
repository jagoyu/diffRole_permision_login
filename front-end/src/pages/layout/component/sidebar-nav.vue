<template>
  <el-menu
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
    :default-active="currentMenu"
    >
    <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
  </el-menu>
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('permission', ['sidebarMenu', 'currentMenu'])
  },
  methods: {
    show() {
      console.log(this.sidebarMenu);
    }
  },
  mouted() {
  },
  components: {
    DynamicMenu
  }
}
</script>
