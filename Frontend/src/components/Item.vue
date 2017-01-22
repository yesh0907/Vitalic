<template>

<div class="container">
  <div class="title"><el-row><el-col :offset="1"><h2>{{
    date
    }}</h2></el-col></el-row></div>
  <div class="content">
    <div v-for="(each, key) in data" v-if="!format(key, each)[2]" id="tb">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="12">
          <h3>
            <i :class="'fa fa-'+ format(key, each)[1] " aria-hidden="true"></i>
            {{key}}
            </h3>
        </el-col>
        <el-col :span="12">
          <h3>{{format(key, each)[0]}}</h3>
        </el-col>
      </el-row>
      <hr>
    </div>
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
  },
  methods: {
    format (key, each) {
      switch (key) {
        case 'date':
          return [moment(each).format('MMMM Do YYYY hh:mm'), 'calendar']
        case 'stress':
          return [each, 'hand-rock-o']
        case 'heartRate':
          return [each.health + ' ' + each.value, 'heart']
        case 'cholesterol':
          return [each, 'medkit']
        case 'mood':
          return [each, 'smile-o']
        case 'breathingRate':
          return [each, 'cloud']
        case 'fever':
          return [each, 'sun-o']
        case 'bloodPressure':
          return ['Systolic Pressure: ' + each.systolicPressure + ', Diastolic Pressure: ' + each.diastolicPressure + ', Total: ' + each.health, '']
        case 'count':
          return ['', '', true]
        default:
          return ['', '']
      }
    },
    wordToIcon (word) {
      switch (word) {
        case 'POSITIVE':
        case 'NORMAL':
          return 'smile-o'
        case 'EXCELLENT':
          return 'star'
        case 'NEUTRAL':
          return 'meh-o'
        case 'NEGATIVE':
          return 'frown-o'
        case 'HIGH':
          return 'fire'
        case 'LOW':
          return 'snowflake-o'
        default:
          return ''
      }
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
    padding: 16px 16px;
}

.title {
  text-align: left;
}

#tb {
  text-align: left;
}
</style>
