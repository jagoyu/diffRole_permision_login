<template>
  <div>
    <div>{{message}}</div>
    <div>请检查您输入的网址是否正确</div>
    <a @click="backToHome">返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'page404',
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
      return '404 您的页面飞走了'
    }
  }
}
</script>
