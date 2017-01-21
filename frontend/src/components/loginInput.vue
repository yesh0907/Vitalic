<template>
  <div id="loginInput" class="content container">
    <el-row :gutter="20">
      <el-col :span="6" :offset="6"><el-input placeholder="Email" v-model="email"></el-input></el-col>
      <el-col :span="6"><el-input placeholder="Password" v-model="password"></el-input></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'loginInput'
  }
</script>

<style>

</style>
