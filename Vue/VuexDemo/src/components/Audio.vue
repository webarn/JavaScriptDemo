<template>
  <div class="audio">
    <!-- http://nc.menedu.com/uploads/mp3/20170822/6f338612b198886f003bbead59c70b54.mp3 -->
    <!-- http://nc.menedu.com/uploads/mp3/20170913/74c8750b91c2b522ec422641f89523eb.mp3 -->
    <!-- http://nc.menedu.com/uploads/mp3/20170913/74c8750b91c2b522ec422641f89523eb.mp3 -->
    <!-- http://audio.xmcdn.com/group12/M07/3A/15/wKgDW1WbQPbw4RDiAJN8DEPVudg812.m4a -->
    <!--  -->
    <audio controls @canplay="playOk()" @playing="buffer" @timeupdate="ing()" src="http://nc.menedu.com/uploads/mp3/20170822/6f338612b198886f003bbead59c70b54.mp3" ref="el"></audio>
    <div class="hr" ref="ing"></div>
    <h4>{{time}}</h4>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  data() {
    return {
      books: {},
      time: '',
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    buffer() {
      let el = this.$refs.el;
      let self = this;
      let time = setInterval(function() {
        if (el.buffered.length) {
          let timeRanges = el.buffered;
          let timeBuffered = timeRanges.end(timeRanges.length - 1);
          let bufferPercent = (timeBuffered / el.duration) * 100;
          self.$refs.ing.style.width = bufferPercent + '%';
        }
      }, 1000);
    },
    playOk() {
      let el = this.$refs.el;
      this.time = el.currentTime;
      console.log(el.readyState);
      if (el.readyState > 2) {
        // el.currentTime = 2;
      }
      // el.currentTime = 0;
      // alert(1);
      // el.play();
    },
    ing() {
      let el = this.$refs.el;
      this.time = el.currentTime
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
audio {
  width: 80%;
  height: 150px;
}

.hr {
  width: 1%;
  height: 10px;
  background: forestgreen;
}

.link {
  font-size: 26px;
  font-weight: bold;
  margin: 30px;
}

.box {
  border: 1px solid darkgrey;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.playicon {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-radius: 50%;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
}

.icon2 {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0);
  left: 82px;
  border-top-color: #ccc;
}

.title {
  width: 500px;
  height: 30px;
  border: 2px solid #eaeaea;
  line-height: 30px;
  font-size: 18px;
}

.h_time {
  font-size: 12px;
  padding-left: 50px;
}

.ing {
  border: 5px solid chocolate;
}

.rotate {
  animation: myfirst 3s linear infinite;
}

@keyframes myfirst {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  text-align: left;
  border: 1px solid #eaeaea;
  margin: 15px 0;
  padding: 20px;
}

p {
  text-align: left;
}
</style>
