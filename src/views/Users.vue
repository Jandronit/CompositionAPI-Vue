<script>
import {defineComponent} from 'vue';
import axios from 'axios';
import { ref } from 'vue';
export default defineComponent({
  name: 'Users',
  setup() {
      const users = ref([]);
      const isLoading = ref(true);
      const currentPage = ref(1);
      const errorMessages = ref('');

      const getUsers = async ( page = 1 ) => {
          if (page <= 0 ) page = 1;
          isLoading.value = true;
          try {
              const { data } = await axios.get('https://reqres.in/api/users', {
                  params: { page }
              });

              if ( data.data.length > 0 ){
              users.value = data.data;
              currentPage.value = page;
              errorMessages.value = null;
              } else if( currentPage.value > 0 ) {
                  errorMessages.value = 'No users found';
              }

              isLoading.value = false;

          } catch (error) {
              errorMessages.value = error.message;
              isLoading.value = false;
          }
      }

      getUsers();
      return {
          users,
          isLoading,
          currentPage,
          errorMessages,
          getUsers,

          nextPage: () => getUsers(currentPage.value + 1),
          prevPage: () => getUsers(currentPage.value - 1)
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
