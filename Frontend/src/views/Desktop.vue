<template>
<div class="container">
  <el-menu class="el-menu-demo" mode="horizontal" id="nav" :router="true">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/About">About</el-menu-item>
    <el-menu-item index="/Desktop">Dashboard</el-menu-item>
    <el-menu-item style="float: right" index="/Detail">More Data</el-menu-item>
  </el-menu>
  <br>
  <br>
  <br>
  <br>
  <el-row>
    <el-col :span="16"><Dashboard></Dashboard></el-col>
    <el-col :span="8">
      <el-row>
        <uploadBox></uploadBox>
        <Live style="position: fixed; display: block; right:5%;"></Live>
      </el-row>
    </el-col>
  </el-row>
</div>

</template>

<script>
import Dashboard from './Dashboard'
import Live from './Live'
import Detail from './Detail'
import uploadBox from '../components/uploadBox'

export default {
  components: {
    Dashboard,
    Live,
    Detail,
    uploadBox
  },
  created () {
    for (let i = 0; i < 10; i++) {
      this.$store.commit('newRecord', {
        stress: 'NORMAL',
        heartRate: {
          value: 88,
          health: 'GOOD'
        },
        cholesterol: 'NORMAL',
        mood: 'NORMAL',
        bloodPressure: {
          systolicPressure: 20,
          diastolicPressure: 70,
          health: 'GOOD'
        },
        breathingRate: 20,
        fever: 'NONE'
      })
    }
  }
}
</script>

<style>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
}
</style>
