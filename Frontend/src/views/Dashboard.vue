<template>

<div class="container">
  <el-row type="flex">
    <el-col :span="4">
      <Timeline></Timeline>
    </el-col>
    <el-col :span="20">
      <div v-for="each in $store.state.records">
        <Item :data="each"></Item>
        <br>
      </div>
    </el-col>
  </el-row>
  
</div>

</template>

<script>
import Item from '../components/Item'
import Timeline from '../components/Timeline'

export default {
  components: {
    Item,
    Timeline
  },
  data () {
    return {
      items: [1, 2, 3]
    }
  },
  mounted () {
    this.$store.commit('newRecord', {
      date: new Date(),
      heartrate: 90,
      mood: 'happy',
      bloodPressure: 12
    })
  }
}
</script>

<style>

</style>
