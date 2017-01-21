<template>
  <div id="navbar">
    <el-row>
      <el-col :span="6" :offset="4"><router-link to="/"><img id="logo" src="../assets/v_logo_v.png"/></router-link></el-col>
      <el-col class="menu" :span="6" :offset="5" style="">
<<<<<<< HEAD
        <el-menu default-active="/" mode="horizontal" @select="handleSelect" style="float: left">
          <el-menu-item id="home" index="/">Home</el-menu-item>
          <el-menu-item id="about" index="/About">About</el-menu-item>
          <el-menu-item id="dashboard" index="/Dashboard">Dashboard</el-menu-item>
=======
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="float: left">
          <el-menu-item index="1"><router-link to="/" class="route">Home</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="About" class="route">About</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="Desktop" class="route">Dashboard</router-link></el-menu-item>
>>>>>>> origin/master
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
