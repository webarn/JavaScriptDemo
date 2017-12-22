
<template>
  <!-- 页面2,通过路由进入 -->
  <div class="index">
    <!-- 通过路由携带的参数id,请求id对应数据 -->
    <p>{{param}}</p>

    <!-- 请求数据展示 -->
    <code>{{data}}</code>

  </div>
</template>

<script>
export default {

  data() {
    return {
      //获取路由携带id参数
      param: this.$route.params.id,
      //这里是懒得写这么多接口,就提供一个固定的,性质与param一样
      id: 1,
      data: {}
    }
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let url = 'page';
      let params = {
        id: this.id
      }
      this.data = await this.axios.get(url, params);
      console.log(this.list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
