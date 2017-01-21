<template>

<div class="container">
  <el-row type="flex">
    <el-col :span="4">
      <Timeline></Timeline>
    </el-col>
    <el-col :span="20">
      <div v-for="(each, id) in $store.state.records">
        <Item :data="each" :id="id"></Item>
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

</style>
