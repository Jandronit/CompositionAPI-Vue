<template>
  <h1>Search Pokemon: {{pokemonId}}</h1>
  <form @submit.prevent="onSubmit">
    <input
            type="text"
            placeholder="Search Pokemon"
            v-model="pokemonId"
            ref="txtSearchId"
    >
  </form>
    <br>
  <span>Press enter to search</span>
</template>

<script>
import {defineComponent, ref, onActivated} from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: "SearchPokemon",
    setup() {
        const router = useRouter();

        const pokemonId = ref(1);
        const txtSearchId = ref();

        onActivated(() => {
            txtSearchId.value.select();
        });
        return {
            pokemonId,
            txtSearchId,
            onSubmit: () => {
                router.push({name: 'pokemon-id', params: {id: pokemonId.value}});
            }
        }
    }
});
</script>

<style scoped>

</style>
