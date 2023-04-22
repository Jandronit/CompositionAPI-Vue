<template>
<h1>Thanos Todo List</h1>
  <h4>Pending: {{ pending.length }}</h4>
</template>

<script>
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
export default defineComponent({
    name: "TodoVuex",
    data() {
        const store = useStore();
        return {
            pending: computed(() => store.getters['pendingTodos'])
        }
    },
})
</script>

<style scoped>

</style>
