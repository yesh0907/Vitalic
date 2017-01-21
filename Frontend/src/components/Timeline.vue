<template>
<div class="container">
  <div class="line" :style="'height:'+height*(total-1)+'px'"></div>
  <div class="dot" @click="moveTo(id)" :style="'transform: translate(0,'+height*(total-each.count)+'px);'" v-for="(each, id) in $store.state.records">
    <el-tooltip class="item" effect="dark" :content="date(each.date)" placement="right">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </el-tooltip>
  </div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    total () {
      return Object.keys(this.$store.state.records).length
    }
  },
  methods: {
    date (d) {
      return moment(d).fromNow()
    }
  },
  data () {
    return {
      height: 50
    }
  },
  props: ['moveTo']
}
</script>

<style scoped>
.line {
  width: 5px;
  background-color: #ffffff;
  position: fixed;
  border-radius: 25px;

}
.container {
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  position: relative;
}

.item {
  margin: auto;
}

.dot {
  display: flex;
  justify-content: center;
  align-items: center;
  color:#e74c3c;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  background-color: #ffffff;
  position: fixed;
}
</style>
