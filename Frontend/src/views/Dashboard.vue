<template>

<div class="container">
  <el-row type="flex">
    <el-col :span="4">
      <Timeline :move-to="moveTo"></Timeline>
    </el-col>
    <el-col :span="20" style="overflow: hidden;">
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
import Timeline from '../components/Timeline'

import $ from 'jquery'

export default {
  name: 'dashboard',
  components: {
    Item,
    Timeline
  },
  data () {
    return {
      items: [1, 2, 3],
      element: Timeline
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
</style>
