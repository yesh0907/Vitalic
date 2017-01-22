import Vue from 'vue'
import Vuex from 'vuex'

import $ from 'jquery'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  'email': 'yesh0907@hotmail.com',
  records: {
    'a42936c9458ddf1451f91a5831ab670c': {
      'date': 'Sat Jan 21 2017 19:12:24 GMT+0800 (SGT)',
      'heartrate': 90,
      'mood': 'happy',
      'stressLevel': 'low',
      'breathingRate': 12,
      'bloodPressure': 12,
      'count': 1
    }
  },
  screenWidth: 0,
  screenHeight: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  newRecord (state, update) {
    $.ajax({
      url: 'https://vitalic.io/api/records/new',
      dataType: 'json',
      type: 'POST',
      data: {
        email: state.email,
        heartRate: update['heartRate'],
        mood: update['mood'],
        diaBloodPressure: update['bloodPressure']['diastolicPressure'],
        sysBloodPressure: update['bloodPressure']['systolicPressure'],
        stress: update['stress'],
        breathingRate: update['breathingRate'],
        cholesterol: update['cholesterol'],
        fever: update['fever'],
        bloodPressureHealth: update['bloodPressure']['health'],
        heartRateHealth: update['heartRate']['health']
      },
      success: (result) => {
        console.log(result)
        const data = result['data']
        Vue.set(state.records, data['_id'], data)
      }
    })
  },
  resize (state, update) {
    Vue.set(state, 'screenWidth', update.width)
    Vue.set(state, 'screenHeight', update.height)
  },
  fetchRecords (state, update) {
    $.ajax({
      url: 'https://vitalic.io/api/records/all',
      dataType: 'json',
      data: { 'email': state.email },
      type: 'POST',
      success: (result) => {
        const data = result['data']
        for (let each of data) {
          Vue.set(state.records, each['_id'], each)
        }
      }
    })
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  fetchAllRecords ({ commit, state }) {
    commit('fetchRecords')
  }
}

// getters are functions
const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
