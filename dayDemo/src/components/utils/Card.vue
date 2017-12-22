<template>
  <!-- 名片组件 -->
  <div class="card">
    <div class="list" v-for="(item,key) in data.list" :key="key" @click="link(item.id)">
      <div class="imgUrl" :style="`background:url(${item.imgUrl}); backgroundSize: cover`"></div>
      <div class="name">{{item.name}}</div>
      <div>
        <section>
          <span>性别: {{item.sex}}</span>
          <span>年龄: {{item.age}}</span>
          <span>省份: {{item.add}}</span>
        </section>

        <p>编码: {{item.code}}</p>
        <p>博客: {{item.web}}</p>
        <p>星级: {{item.star}}</p>
        <p>简介: {{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    //路由跳转
    link(id) {
      this.$router.push({ name: 'pageTwo', params: { id: id } })
    },
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.list {
  width: 400px;
  border: 1px dotted mediumslateblue;
  padding: 8px;
  font-size: 18px;
  margin: 20px;
}

.imgUrl {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 1px solid #eaeaea;
  margin: auto;
  background-size: 100% 100%;
}

.name {
  text-align: center;
  font-size: 22px;
}

section {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

section span {
  padding: 8px 0;
}
</style>


