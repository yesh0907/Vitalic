<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">{{infoType}}</span>
    </div>
    <div>
      <!-- <detailType infoType="this.infoType"></detailType> -->
      <div  v-if="infoType == 'Heart Rate'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].heartrate}}</h3>
        <chartComponent typeOfData="Heart Rate" :dataStuffs="[78, 84, 95, 92, 77, 87, 73, 75, 86, 94, 90]"></chartComponent>
      </div>
      <div v-if="infoType == 'Stress Level'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel.charAt(0).toUpperCase() + $store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel.substring(1)}}</h3>
        <chartComponent typeOfData="Number of High Stress Days" :dataStuffs="[3, 6, 5, 5, 10, 8, 4, 8, 6, 6, 10, 9]"></chartComponent>
      </div>
      <div v-if="infoType == 'Breathing Rate'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].breathingRate}}</h3>
        <chartComponent typeOfData="Breathing Rate" :dataStuffs="[14, 10, 11, 11, 13, 12, 16, 15, 12, 11, 12, 12]"></chartComponent>
      </div>
      <div v-if="infoType == 'Blood Pressure'">
        <h3>Latest: {{$store.state.records['a42936c9458ddf1451f91a5831ab670c'].bloodPressure}}</h3>
        <chartComponent typeOfData="Blood Pressure" :dataStuffs="[16, 14, 12, 12, 13, 11, 15, 14, 12, 13, 14, 12]"></chartComponent>
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
        heartrateData: [78, 84, 95, 92, 77, 87, 73, 75, 86, 94, 90],
        stressLevelData: [78, 84, 95, 92, 77, 87, 73, 75, 86, 94, 90],
        breathingRateData: [78, 84, 95, 92, 77, 87, 73, 75, 86, 94, 90],
        bloodPressureData: [78, 84, 95, 92, 77, 87, 73, 75, 86, 94, 90]
      }
    }
  }
</script>

<style>

</style>
