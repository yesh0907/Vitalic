import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
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
  newRecord (state, update) {
    const uuid = () => {
      function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      }
      return s4() + s4() + s4() + s4() +
        s4() + s4() + s4() + s4()
    }

    let obj = {
      date: new Date().toString(),
      stress: '',
      heartRate: {},
      cholesterol: '',
      mood: '',
      bloodPressure: {},
      breathingRate: 0,
      fever: '',
      count: Object.keys(state.records).length + 1
    }
    obj = Object.assign(obj, update)

    let id = uuid()
    while (id in state.records) id = uuid()
    state.records = {
      [id]: obj,
      ...state.records
    }
  },
  resize (state, update) {
    Vue.set(state, 'screenWidth', update.width)
    Vue.set(state, 'screenHeight', update.height)
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {}

// getters are functions
const getters = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
