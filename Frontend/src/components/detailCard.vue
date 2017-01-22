<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">{{infoType}}</span>
    </div>
    <div>
      <!-- <detailType infoType="this.infoType"></detailType> -->
      <div  v-if="infoType == 'Heart Rate'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].heartrate}}</h3>
        <chartComponent typeOfData="Heart Rate"></chartComponent>
      </div>
      <div v-if="infoType == 'Stress Level'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel.charAt(0).toUpperCase() + $store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel.substring(1)}}</h3>
        <chartComponent typeOfData="Stress Level"></chartComponent>
      </div>
      <div v-if="infoType == 'Breathing Rate'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].breathingRate}}</h3>
        <chartComponent typeOfData="Breathing Rate"></chartComponent>
      </div>
      <div v-if="infoType == 'Blood Pressure'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].bloodPressure}}</h3>
        <chartComponent typeOfData="Blood Pressure"></chartComponent>
      </div>
    </div>
    <div>
    </div>
  </el-card>
</template>

<script>
  import chartComponent from './chartComponent'
  export default {
    name: 'detailCard',
    props: [ 'infoType' ],
    components: {
      chartComponent
    },
    data () {
      return {
      }
    }
  }
</script>

<style>

</style>
