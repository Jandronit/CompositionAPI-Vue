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
          :class="{'completed': todo.completed}" @click="toggleTodo(todo.id)">
        <input type="checkbox" v-model="todo.completed">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Add Todo</button>

  <modal v-if="isOpen" @on:close="closeModal">
      <template #header>
          <h1>New task</h1>
      </template>
      <template #body>
          <form @submit.prevent="addTodo(newTodoText); isOpen=false; newTodoText=''">
          <input type="text" v-model="newTodoText" placeholder="Add new todo">
              <br>
              <br>
          <button type="submit">Add</button>
          </form>
      </template>
  </modal>
</template>

<script>
import {defineComponent, ref} from 'vue';
import useTodos from "@/composables/useTodos";
import Modal from '@/components/Modal.vue';
export default defineComponent({
    name: "TodoVuex",
    components: { Modal },
    setup() {
        const { pending, currenTab, getTodosByTab, toggleTodo, addTodo } = useTodos();
        const isOpen = ref(false);

        return {
            currenTab,
            pending,
            getTodosByTab,
            addTodo,
            toggleTodo,
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
            newTodoText: ref(''),
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
