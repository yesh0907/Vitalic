<template>
  <div id="homeCarousel">
   <el-carousel :interval="3000" height="200px">
     <el-carousel-item>
       <h3>Heart Rate: <h2>{{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].heartrate }}</h2></h3>
     </el-carousel-item>
     <el-carousel-item>
       <h3>Stress Level: <h2>{{ ($store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel).charAt(0).toUpperCase() + ($store.state.records['a42936c9458ddf1451f91a5831ab670c'].stressLevel).substring(1) }}</h2></h3>
     </el-carousel-item>
     <el-carousel-item>
       <h3>Breathing Rate: <h2>{{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].breathingRate }}</h2></h3>
     </el-carousel-item>
     <el-carousel-item>
       <h3>Blood Pressure: <h2>{{ $store.state.records['a42936c9458ddf1451f91a5831ab670c'].bloodPressure }}</h2></h3>
     </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'homeCarousel',
    data () {
      return {
        activeName: 'first'
      }
    },
  }
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>
