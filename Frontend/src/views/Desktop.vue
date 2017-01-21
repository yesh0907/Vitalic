<template>
<el-row>
  <el-col :span="16"><Dashboard></Dashboard></el-col>
  <el-col :span="8"><Live style="position: fixed; display: block; right:5%;"></Live></el-col>
</el-row>
</template>

<script>
import Dashboard from './Dashboard'
import Live from './Live'
export default {
  components: {
    Dashboard,
    Live
  }
}
</script>