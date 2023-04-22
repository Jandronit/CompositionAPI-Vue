<template>
<h1>Thanos Todo List</h1>
  <h4>Tasks: {{ $store.state.todos.length}}</h4>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: "TodoVuex"
})
</script>

<style scoped>

</style>
