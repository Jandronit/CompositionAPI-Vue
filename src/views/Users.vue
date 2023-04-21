<script>
import {defineComponent} from 'vue';
import useUsers from '../composables/useUsers';
export default defineComponent({
  name: 'Users',
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
        <ul>
            <li v-for="{ first_name, last_name, email, id } in users" :key="id">
                <h4>{{ first_name }} {{ last_name }}</h4>
                <h6>{{ email }}</h6>
            </li>
        </ul>
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
