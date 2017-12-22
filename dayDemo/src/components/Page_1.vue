
<template>
  <div class="home">
    <div class="title">人员名单</div>
    <!-- 使用组件 -->
    <card :data="list"></card>
  </div>
</template>

<script>
//引入名片组件
import card from './utils/Card';
export default {
  name: 'hello',
  //注册组件
  components: {
    card
  },
  data() {
    return {
      list: {},
    }
  },
  mounted() {
    this.fetch();
  },
  methods: {
    //数据请求
    async fetch() {
      let url = 'page1';
      this.list = await this.axios.get(url);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  padding: 5px 10px;
  font-size: 24px;
  border: 1px solid skyblue;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 70px;
}
</style>
