<template>
  <div id="home">
    <el-row><el-col :span="24"><img id="logo" src="../assets/v_logo_v.png"/></el-col></el-row>
    <el-row><el-col :span="12"><button></button></el-row>
    <!-- <router-link to="/Login"></router-link> -->
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style>
#logo {
  height: 50vh;
  width: 150vh;
  overflow: hidden;
}
</style>
