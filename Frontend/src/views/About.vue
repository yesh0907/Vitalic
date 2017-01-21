<template>
  <div id="about">
    <el-row>
      <el-col :span="6"><router-link to="/"><img id="logo" src="../assets/v_logo_v.png"/></router-link></el-col>
      <el-col :span="10" :offset="4">
        <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="/" class="route">Home</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="About" class="route">About</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="Dashboard" class="route">Dashboard</router-link></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <br>
    <el-card>
      <div slot="header" class="clearfix">
        <span style="line-height: 36px; color: #e74c3c"><h1>About Vitalic</h1></span>
      </div>
      <h4>About Our Product</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h4>About The Team</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h4>About Our Measurements</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </el-card>
    <!-- <homeTabs></homeTabs>
    <br>
    <Details></Details> -->
  </div>
</template>

<script>
  import homeTabs from '../components/homeTabs'
  import Detail from './Detail'
  export default {
    name: 'about',
    components: {
      homeTabs,
      Detail
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
#logo {
  height: 15vh;
  width: 50vh;
  overflow: hidden;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.route {
  text-decoration: none;
}

</style>
