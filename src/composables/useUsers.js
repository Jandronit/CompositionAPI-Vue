import {ref} from 'vue';
import axios from 'axios';

const useUsers = () => {
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

export default useUsers
