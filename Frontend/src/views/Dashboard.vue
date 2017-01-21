<template>

<div class="container">
  <div id="uploadPadding"><el-row><uploadBox></uploadBox></el-row></div>
  <el-row type="flex">
    <el-col :span="4">
      <Timeline :move-to="moveTo"></Timeline>
    </el-col>
    <el-col :span="20">
      <div v-for="(each, id) in $store.state.records">
        <Item :data="each" :ref="id"></Item>
        <br>
      </div>
    </el-col>
  </el-row>

</div>

</template>

<script>
import Item from '../components/Item'
import Timeline from '../components/Timeline'
import uploadBox from '../components/uploadBox'

import $ from 'jquery'

export default {
  components: {
    Item,
    Timeline,
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
        mood: 'happy',
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
