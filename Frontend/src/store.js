import Vue from 'vue'
import Vuex from 'vuex'

import $ from 'jquery'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  'email': 'yesh0907@hotmail.com',
  records: {
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
  resize (state, update) {
    Vue.set(state, 'screenWidth', update.width)
    Vue.set(state, 'screenHeight', update.height)
  },
  setRecord (state, update) {
    state.records = {
      [update._id]: update,
      ...state.records
    }
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  newRecord ({state}, update) {
    return $.ajax({
      url: 'https://vitalic.io/api/records/new',
      dataType: 'json',
      type: 'POST',
      data: {
        email: state.email,
        heartRate: update['heartRate']['value'],
        mood: update['mood'],
        diaBloodPressure: update['bloodPressure']['diastolicPressure'],
        sysBloodPressure: update['bloodPressure']['systolicPressure'],
        stress: update['stress'],
        breathingRate: update['breathingRate'],
        cholesterol: update['cholesterol'],
        fever: update['fever'],
        bloodPressureHealth: update['bloodPressure']['health'],
        heartRateHealth: update['heartRate']['health']
      }
    })
  },
  fetchAllRecords ({ commit, state }) {
    return $.ajax({
      url: 'https://vitalic.io/api/records/all',
      dataType: 'json',
      data: { 'email': state.email },
      type: 'POST'
    })
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
