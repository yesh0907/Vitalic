<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">{{infoType}}</span>
    </div>
    <div>
      <detailType infoType="this.infoType"></detailType>
      <h3 v-if="infoType == 'Heart Rate'">Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].heartrate}}</h3>
      <h3 v-if="infoType == 'Stress Level'">Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel.charAt(0).toUpperCase() + $store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel.substring(1)}}</h3>
      <h3 v-if="infoType == 'Breathing Rate'">Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].breathingRate}}</h3>
      <h3 v-if="infoType == 'Blood Pressure'">Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].bloodPressure}}</h3>
    </div>
  </el-card>
</template>

<script>
  // import Chart from 'chart.js'
  export default {
    name: 'detailCard',
    props: [ 'infoType' ],
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
