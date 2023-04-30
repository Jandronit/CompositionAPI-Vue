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
      pendingTodos( state ) {
          return state.todos.filter(todo => !todo.completed)
      },
      allTodos( state ) {
            return state.todos
      },
      completedTodos( state ) {
            return state.todos.filter(todo => todo.completed)
      },
      getTodosByTab: (state, getters) => (tab) => {
          switch (tab) {
            case 'all': return getters.allTodos
            case 'pending': return getters.pendingTodos
            case 'completed': return getters.completedTodos
          }
      }
  },
  mutations: {
      toggleTodo(  state, id ) {
          const todoIdx = state.todos.findIndex(todo => todo.id === id);
          state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
      }
  },
  actions: {
  },
  modules: {
  }
})
