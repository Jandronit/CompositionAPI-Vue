<template>
<h1>Thanos Todo List</h1>
  <h4>Pending: {{ pending.length }}</h4>
  <hr>
  <button class="active">All</button>
  <button>Pending</button>
  <button>Completed</button>

  <div>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id"
          :class="{'completed': todo.completed}">
        <input type="checkbox" v-model="todo.completed">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
export default defineComponent({
    name: "TodoVuex",
    data() {
        const store = useStore();
        return {
            pending: computed(() => store.getters['pendingTodos']),
            allTodos: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos']),
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
