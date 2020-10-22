<template>
  <div id="app">
    <h1>Hello, Vite</h1>
    <van-button>123</van-button>
  </div>
</template>

<script>
import VanButton from './components/button/index.jsx'
export default {
  name: 'App',
  components: {
    VanButton
  }
}
</script>

<style lang="scss" scoped>
#app {
  color: red;
}
</style>
