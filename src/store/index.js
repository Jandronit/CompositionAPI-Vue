import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
        { id: 1, text: 'Collect the infinity stones', completed: false },
        { id: 2, text: 'soul stone', completed: true },
        { id: 3, text: 'power stone', completed: false },
        { id: 4, text: 'reality stone', completed: false },
        { id: 5, text: 'Get new proficient minions', completed: false },
        ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
