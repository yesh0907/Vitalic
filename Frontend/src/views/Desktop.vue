<template>
<div class="container">
  <el-menu default-active="/Desktop" class="el-menu-demo" mode="horizontal" id="nav" router="true">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/About">About</el-menu-item>
    <el-menu-item index="/Desktop">Dashboard</el-menu-item>
  </el-menu>
  <br>
  <br>
  <br>
  <br>
  <el-row>
    <el-col :span="16"><Dashboard></Dashboard></el-col>
    <el-col :span="8"><Live style="position: fixed; display: block; right:5%;"></Live></el-col>
  </el-row>
</div>

</template>

<script>
import Dashboard from './Dashboard'
import Live from './Live'

export default {
  components: {
    Dashboard,
    Live
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