<template>
  <div id="navbar">
    <el-row>
      <el-col :span="6" :offset="4"><router-link to="/"><img id="logo" src="../assets/v_logo_v.png"/></router-link></el-col>
      <el-col class="menu" :span="8" style="">
        <el-menu class="el-menu-demo" mode="horizontal" style="float: right; margin-top: 25px; margin-left: 10px" :router="true">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/About">About</el-menu-item>
          <el-menu-item index="/Desktop">Dashboard</el-menu-item>
          <el-menu-item index="/Detail">Health Overview</el-menu-item>
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
        document.getElementById(key).className += 'active-class'
        document.getElementById(key).className = document.getElementById(key).className.replace(/(?:^|\s)MyClass(?!\S)/g, '')
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
