<script>
import {defineComponent} from 'vue';
import useUsers from '../composables/useUsers';
import UserList from '../components/UserList.vue';
export default defineComponent({
  name: 'Users',
    components: {
        UserList
    },
  setup() {

      const {users,
          isLoading,
          currentPage,
          errorMessages,
          prevPage,
          nextPage
      } = useUsers();

      return {
          users,
          isLoading,
          currentPage,
          errorMessages,
          prevPage,
          nextPage
      }
  }
})
</script>
<template>
    <h2 v-if="isLoading">Please wait...</h2>
    <h2 v-else>Users</h2>
    <h5 v-if="errorMessages">{{ errorMessages }}</h5>

    <div v-if="users.length > 0">
        <user-list :users="users"
                   v-slot="{ user }">

            <h5>{{ user.first_name }} {{ user.last_name }}</h5>
            <span> {{ user.email }} </span>

        </user-list>
    </div>

    <button @click="prevPage">Back</button>
    <button @click="nextPage">Next</button>
    <span>Page: {{ currentPage }}</span>
</template>
<style scoped>
    h2 {
        text-align: center;
        width: 100%;
        color: red;
    }

    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }
</style>
