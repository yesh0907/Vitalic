<template>
  <div id="navbar">
    <el-row>
      <el-col :span="6"><router-link to="/"><img id="logo" src="../assets/v_logo_v.png"/></router-link></el-col>
      <el-col :span="7" style="float: right;">
        <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="/" class="route">Home</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="About" class="route">About</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="Dashboard" class="route">Dashboard</router-link></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>

</style>
