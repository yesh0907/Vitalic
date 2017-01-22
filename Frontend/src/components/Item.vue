<template>

<div class="container">
  <div class="title">
    <el-row justify="space-between" type="flex" align="middle">
      <el-col :offset="1" :span="11">
        <h2 style="display: inline-block;">{{date}}</h2>
      </el-col>
      <el-col :span="12">
        <h2 style="display: inline-block;">
          <i class="fa fa-calendar" aria-hidden="true"></i>
            {{formalDate}}
        </h2>
      </el-col>
    </el-row>
  </div>
  <div class="content">
    <div v-for="(each, key) in data" v-if="!format(key, each)[2]" id="tb">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="12">
          <h3>
            <i :class="'fa fa-'+ format(key, each)[1] " aria-hidden="true"></i>
            {{capitalizeLetter(key)}}
            </h3>
        </el-col>
        <el-col :span="12">
          <h3>{{format(key, each)[0]}}</h3>
        </el-col>
      </el-row>
      <hr>
    </div>

    <el-row id="tb" type="flex" justify="center" align="middle">
      <el-col :span="12">
        <h3>Systolic Pressure</h3>
      </el-col>
      <el-col :span="12">
        <h3>
            {{data.bloodPressure.sys}}
        </h3>
      </el-col>
    </el-row>
    <hr>
    <el-row id="tb" type="flex" justify="center" align="middle">
      <el-col :span="12">
        <h3>Diastolic Pressure</h3>
      </el-col>
      <el-col :span="12">
        <h3>
            {{data.bloodPressure.dia}}
        </h3>
      </el-col>
    </el-row>
    <hr>
    <el-row id="tb" type="flex" justify="center" align="middle">
      <el-col :span="12">
        <h3>General Blood Pressure</h3>
      </el-col>
      <el-col :span="12">
        <h3>
            {{data.bloodPressure.health}}
        </h3>
      </el-col>
    </el-row>
  </div>
</div>

</template>

<script>
import moment from 'moment'

export default {
  props: ['data'],
  computed: {
    date () {
      return this.capitalizeFirstLetter(moment(this.data.date).fromNow())
    },
    formalDate () {
      return moment(this.data.date).format('MMMM Do YYYY hh:mm')
    }

  },
  methods: {
    format (key, each) {
      switch (key) {
        case 'stress':
          return [each, 'hand-rock-o']
        case 'heartRate':
          return [each.health + ' (' + Math.floor(each.value) + ' BPM)', 'heart']
        case 'cholesterol':
          return [each, 'medkit']
        case 'mood':
          return [each, 'smile-o']
        case 'breathingRate':
          return [each, 'cloud']
        case 'fever':
          return [each, 'sun-o']
        case 'bloodPressure':
        case 'date':
        case 'count':
        case '__v':
        case '_id':
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
    },
    capitalizeLetter (word) {
      const newWord = word.replace(/([A-Z])/g, ' $1').trim()

      return this.toTitleCase(newWord)
    },
    toTitleCase (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    capitalizeFirstLetter (str) {
      return str.substring(0, 1).toUpperCase() + str.substring(1)
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
