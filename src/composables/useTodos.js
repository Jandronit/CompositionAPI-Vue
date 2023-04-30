import {computed, ref} from 'vue';
import {useStore} from 'vuex';

const useTodos = () => {

    const store = useStore();
    const currenTab = ref('all');

    return {
        currenTab,

        pending: computed(() => store.getters['pendingTodos']),
        allTodos: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),

        getTodosByTab: computed( () => store.getters['getTodosByTab'](currenTab.value) ),

        //Methods
        toggleTodo: (id) => store.commit('toggleTodo', id),
    }
}
export default useTodos
