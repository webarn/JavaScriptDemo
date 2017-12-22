<template>
  <div class="statu">
    <div class="play" :class="{ing:icon.bol}">{{icon.font}}</div>
    <ul>
      <li v-for="(item,key,index) in ages" :key="key">
        <span>姓名: {{item.name}}</span> |
        <span>年龄: {{item.age}}</span> |
        <span>城市: {{item.city}}</span> |
        <span>星级: {{item.star}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import { get } from '@/assets/http'
export default {
  data() {
    return {
      perpon: {},
      test: [],
    }
  },
  computed: {
    icon() {
      return this.$store.state.icon
    },
    ages() {
      return this.$store.getters.ages
    }
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      let test = await get('api/test');
      this.get_list(test.data.list)
    },
    ...mapMutations({
      get_list: 'GET_LIST'
    })
  }
}
</script>

<style scoped>
.play {
  font-size: 16px;
  height: 50px;
  width: 50px;
  margin: 30px auto;
  border: 5px solid #ccc;
  border-radius: 50%;
  line-height: 50px;
}

.ing {
  border: 5px solid chocolate;
}

li {
  list-style-type: none;
  padding: 20px;
  text-align: left;
  color: slateblue;
  font-size: 18px;
  border-bottom: 1px solid #eaeaea
}

span {
  padding: 10px 15px;
}
</style>


