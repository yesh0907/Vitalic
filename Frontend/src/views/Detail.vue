<template>
  <div id="details">
    <el-row :gutter="20">
      <el-col :span="6">
        <detailCard infoType="Heart Rate" infoForStore="heartRate"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Stress Level" infoForStore="stressLevel"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Breathing Rate" infoForStore="breathingRate"></detailCard>
      </el-col>
      <el-col :span="6">
        <detailCard infoType="Blood Pressure" infoForStore="bloodPressure"></detailCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import detailCard from '../components/detailCard'
  export default {
    name: 'details',
    components: {
      detailCard
    }
  }
</script>

<style>

</style>
