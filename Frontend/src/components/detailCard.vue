<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">{{infoType}}</span>
    </div>
    <div>
      <!-- <detailType infoType="this.infoType"></detailType> -->
      <div  v-if="infoType == 'Heart Rate'">
        <h3> Latest: {{Math.round(last.heartRate.value)}}</h3>
        <chartComponent typeOfData="Heart Rate" :dataStuffs="[78, 84, 95, 92, 77, 87, 73, 75, 86, 94, 90]"></chartComponent>
      </div>
      <div v-if="infoType == 'Stress Level'">
        <h3>Latest: {{(last.stress)}}</h3>
        <chartComponent typeOfData="High Stress Days" :dataStuffs="[3, 6, 5, 5, 10, 8, 4, 8, 6, 6, 10, 9]"></chartComponent>
      </div>
      <div v-if="infoType == 'Breathing Rate'">
        <h3>Latest: {{Math.round(last.breathingRate)}}</h3>
        <chartComponent typeOfData="Breathing Rate" :dataStuffs="[14, 10, 11, 11, 13, 12, 16, 15, 12, 11, 12, 12]"></chartComponent>
      </div>
      <div v-if="infoType == 'Blood Pressure'">
        <h3>Latest: {{last.bloodPressure.health}}</h3>
        <chartComponent typeOfData="Blood Pressure" :dataStuffs="[16, 14, 12, 12, 13, 11, 15, 14, 12, 13, 14, 12]"></chartComponent>
      </div>
      <div v-if="infoType == 'Mood'">
        <h3>Latest: {{(last.mood)}}</h3>
        <chartComponent typeOfData="Mood" :dataStuffs="[16, 14, 12, 12, 13, 11, 15, 14, 12, 13, 14, 12]"></chartComponent>
      </div>
      <div v-if="infoType == 'Cholesterol Level'">
        <h3>Latest: {{last.cholesterol}}</h3>
        <chartComponent typeOfData="High Cholesterol Days" :dataStuffs="[5, 3, 4, 7, 12, 9, 14, 15, 13, 16, 18, 18]"></chartComponent>
      </div>
    </div>
    <div>
    </div>
  </el-card>
</template>

<script>
  import chartComponent from './chartComponent'
  export default {
    name: 'detailCard',
    props: [ 'infoType' ],
    components: {
      chartComponent
    },
    computed: {
      last () {
        return this.$store.state.records[Object.keys(this.$store.state.records)[0]]
      }
    },
    data () {
      return {

      }
    },
    methods: {
      getList (key) {
        console.log(this.$store.state)
        return Object.keys(this.$store.state.records).map(e => this.$store.state.records.e[key])
      }
    }
  }
</script>

<style>

</style>
