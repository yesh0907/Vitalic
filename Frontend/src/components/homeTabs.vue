<template>
  <div id="homeTabs">
    <el-tabs class="tab" type="border-card" @tab-click="handleClick">
     <el-tab-pane label="LiveStream">
       <live></live>
     </el-tab-pane>
     <el-tab-pane label="Latest Results">
       <el-row>
         <el-col :span="12" :offset="6"><h3>Date: {{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].date.substring(0, 15) }}</h3></el-col>
       </el-row>
       <el-row>
         <el-col :span="6"><h3>Heart Rate: <h2>{{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].heartrate }}</h2></h3></el-col>
         <el-col :span="6"><h3>Stress Level: <h2>{{ ($store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel).charAt(0).toUpperCase() + ($store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel).substring(1) }}</h2></h3></el-col>
         <el-col :span="6"><h3>Breathing Rate: <h2>{{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].breathingRate }}</h2></h3></el-col>
         <el-col :span="6"><h3>Blood Pressure: <h2>{{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].bloodPressure }}</h2></h3></el-col>
       </el-row>
     </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import live from '../views/Live'
  import homeCarousel from './homeCarousel'
  export default {
    name: 'homeTabs',
    components: {
      live,
      homeCarousel
    },
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>
