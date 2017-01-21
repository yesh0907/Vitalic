<template>
  <div id="home">
<<<<<<< Updated upstream:Frontend/src/views/Home.vue
    <el-row><el-col><router-link to="/Login"><el-button type="primary">Login</el-button></router-link></el-col></el-row>
=======
    <el-row><el-col :span="24"><img id="logo" src="../assets/v_logo_v.png"/></el-col></el-row>
    <el-row>
    <!-- <router-link to="/Login"></router-link> -->
>>>>>>> Stashed changes:frontend/src/views/Home.vue
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
