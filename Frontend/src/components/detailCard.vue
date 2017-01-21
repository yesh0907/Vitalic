<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">{{infoType}}</span>
    </div>
    <div>
      <h3>Latest: {{ $store.state.records.vitalityType }}</h3>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'detailCard',
    props: [ 'infoType', 'infoForStore' ],
    data () {
      return {
        vitalityType: this.infoForStore
      }
    }
  }
</script>

<style>

</style>
