<template>

<div class="container">
  <div class="title"><el-row><el-col :offset="1"><h2>{{
    date
    }}</h2></el-col></el-row></div>
  <div class="content">
    <el-row :gutter="20" :padding="20">
      <el-col :span="6" :offset="1"><h4>Heart Rate</h4></el-col>
      <el-col :span="6"><h4>Mood</h4></el-col>
      <el-col :span="6"><h4>Blood Pressure</h4></el-col>
    </el-row>
    <el-row :gutter="20" :padding="20">
      <el-col :span="6" :offset="1"><h2 v-bind:style="">{{ data.heartrate }}</h2></el-col>
      <el-col :span="6"><h2>{{ data.mood.charAt(0).toUpperCase() + data.mood.slice(1) }}</h2></el-col>
      <el-col :span="6"><h2>{{ data.bloodPressure }}</h2></el-col>
    </el-row>
    <h2></h2>
  </div>
</div>

</template>

<script>
import moment from 'moment'

export default {
  props: ['data'],
  computed: {
    date () {
      return moment(this.data.date).fromNow()
    }
  }
}
</script>

<style scoped>
.container {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #ffffff;

}

.container:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.content {
    padding: 2px 16px;
}

.title {
  text-align: left;
}
</style>
