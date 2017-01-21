<template>
  <div id="details">
    <el-row :gutter="20">
      <el-col :span="6">
        <detailCard infoType="Heart Rate"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Stress Level"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Breathing Rate"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Blood Pressure"></detailCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import detailCard from '../components/detailCard'
  export default {
    components: {
      detailCard
    }
  }
</script>

<style>

</style>
