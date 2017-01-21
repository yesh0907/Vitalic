<template>

<div class="container">
  <el-row type="flex">
    <el-col :span="4">
      <Timeline :move-to="moveTo" id="timelinePadding"></Timeline>
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
      items: [1, 2, 3],
      element: Timeline
    }
  },
  methods: {
    moveTo (id) {
      $('html, body').animate({
        scrollTop: this.$refs[id][0].$el.offsetTop
      }, 1000)
    },
    changeCSS () {
      $(document).scroll(function () {
        $('#timelinePadding').css({'padding-top': $(this).scrollTop() > 125 ? '0px' : '125px'})
      })
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
    };
    window.addEventListener('scroll', this.changeCSS)
  }
}
</script>

<style>
#uploadPadding {
  padding: 50px
}

#timelinePadding {
  padding-top: 125px
}
</style>
