<template>
  <div id="app">
    <div class="loading" v-show="loading">加载中...</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    loading() {
      return this.$store.state.lodaing
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: mediumslateblue;
}

.loading {
  font-size: 40px;
  color: #fff;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: black;
  opacity: .5;
  top: 0;
  line-height: 80vh;
}
</style>
