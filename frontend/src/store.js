import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  records: {
    'f92c8457-a2b2-a9cf-0b29-a938bb03aec4': {
      'date': '2017-01-21T08:20:04.112Z',
      'heartrate': 90,
      'mood': 'happy',
      'bloodPressure': 12
    }
  },
  screenSize: 0
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
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4()
    }

    let obj = {
      date: '',
      heartrate: 0,
      mood: '',
      bloodPressure: 0
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
    Vue.set(state, 'screenSize', update.size)
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
