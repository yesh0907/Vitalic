<template>
  <div id="navbar">
    <el-row>
      <el-col :span="6"><router-link to="/"><img id="logo" src="../assets/v_logo_v.png"/></router-link></el-col>
      <el-col class="menu" :span="6" style="float: right;">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="float: left">
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
    name: 'navbar',
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
.menu {
  float: right;
  text-align: center;
}

.route {
  text-decoration: none;
}
</style>
