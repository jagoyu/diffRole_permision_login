<template>
  <div>
    <div>{{message}}</div>
    <div>对不起，您没有权限</div>
    <a @click="backToHome">返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'page403',
  data() {
    return {}
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    }
  },
  computed: {
    message() {
      return '403 sorry,您没有权限'
    }
  }
}
</script>
