<template>
<h1>Thanos Todo List</h1>
  <h4>Pending: {{ pending.length }}</h4>
  <hr>
  <h4>Todos: {{ allTodos.length }}</h4>
  <h4>Completed: {{ completed.length }}</h4>
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

</style>
