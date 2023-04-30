<template>
<h1>Thanos Todo List</h1>
  <h4>Pending: {{ pending.length }}</h4>
  <hr>
  <button :class="{'active': currenTab === 'all' }" @click="currenTab = 'all'">All</button>
  <button :class="{'active': currenTab === 'pending' }" @click="currenTab = 'pending'">Pending</button>
  <button :class="{'active': currenTab === 'completed' }" @click="currenTab = 'completed'">Completed</button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
          :class="{'completed': todo.completed}">
        <input type="checkbox" v-model="todo.completed">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from 'vue';
import {useStore} from 'vuex';
export default defineComponent({
    name: "TodoVuex",
    setup() {

        const store = useStore();
        const currenTab = ref('all');

        return {
            currenTab,

            pending: computed(() => store.getters['pendingTodos']),
            allTodos: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos']),

            getTodosByTab: computed( () => store.getters['getTodosByTab'](currenTab.value) ),
        }
    },
})
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
ul {
  width: 18.75rem;
  list-style: none;
  padding: 0;
  text-align: left;
}
li {
  margin: 0.5rem 0;
  cursor: pointer;
}
.active {
    background-color: #2c3e50;
    color: white;
}
.completed {
    text-decoration: line-through;
}
button {
  border: none;
  padding: 0.625rem 1.25rem;
  margin: 0.625rem;
  cursor: pointer;
  border-radius: 0.2rem;
}
</style>
