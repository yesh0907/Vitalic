<template>
  <div id="home">
    <el-row>
      <el-col :span="6"><img id="logo" src="../assets/v_logo_v.png"/></el-col>
      <el-col :offset="12"></el-col>
    </el-row>
    <br>
    <homeTabs></homeTabs>
  </div>
</template>

<script>
  import homeTabs from '../components/homeTabs'
  export default {
    name: 'home',
    components: {
      homeTabs
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

.tab {

}

</style>
