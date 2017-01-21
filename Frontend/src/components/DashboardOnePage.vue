<template>

<div class="container">
  <el-row type="flex">
    <el-col :span="4">
      <Timeline :move-to="moveTo"></Timeline>
    </el-col>
    <el-col :span="20" style="overflow: hidden;">
      <div id="uploadPadding"><el-row><uploadBox></uploadBox></el-row></div>
      <div v-for="(each, id) in $store.state.records" >
        <Item :data="each" :ref="id"></Item>
        <br>
      </div>
    </el-col>
  </el-row>

</div>

</template>

<script>
import Item from '../components/Item'
import uploadBox from '../components/uploadBox'

import $ from 'jquery'

export default {
  name: 'dashboardOnePage',
  components: {
    Item,
    uploadBox
  },
  data () {
    return {
      items: [1, 2, 3]
    }
  },
  methods: {
    moveTo (id) {
      $('html, body').animate({
        scrollTop: this.$refs[id][0].$el.offsetTop
      }, 1000)
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
      this.$store.commit('newRecord', {
        date: new Date().toString(),
        heartrate: 90,
        breathingRate: 12,
        stressLevel: 'low',
        bloodPressure: 12
      })
    }
  }
}
</script>

<style>
#uploadPadding {
  padding: 50px
}

</style>
