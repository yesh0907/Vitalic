<template>
  <div id="details">
    <navbar></navbar>
    <br>
    <el-row :gutter="20">
      <el-col :span="6">
        <detailCard infoType="Heart Rate"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Mood"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Breathing Rate"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Blood Pressure"></detailCard>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        <detailCard infoType="Stress Level"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Cholesterol Level"></detailCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import detailCard from '../components/detailCard'
  import navbar from '../components/navbar'
  export default {
    components: {
      detailCard,
      navbar
    }
  }
</script>

<style>

</style>
