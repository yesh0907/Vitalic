<template>
<div class="container">
  <div class="line" :style="'height:'+100*(total-1)+'px'"></div>
  <div class="dot" :onclick="click(id)" :style="'transform: translate(0,'+100*(total-each.count)+'px);'" v-for="(each, id) in $store.state.records">
    <el-tooltip class="item" effect="dark" :content="each.date" placement="right">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </el-tooltip>
  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    click (id) {
      $('html, body').animate({
        scrollTop: $('#' + id).offset().top
      }, 1000)
    }
  },
  computed: {
    total () {
      return Object.keys(this.$store.state.records).length
    }
  }
}
</script>

<style scoped>
.line {
  width: 5px;
  background-color: #ffffff;

  border-radius: 25px;

}
.container {
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  position: relative;
}

.dot {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color:#e74c3c;
  height: 30px;
  width: 30px;
  border-radius: 25px;
  background-color: #ffffff;
}
</style>