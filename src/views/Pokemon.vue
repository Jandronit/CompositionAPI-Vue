<template>
  <h1 v-if="!pokemon && !errorMessage">Searching...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h1>{{pokemon.name}}</h1>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{name: 'pokemon-search'}">Go back</router-link>
  </template>
</template>

<script>
import {useRoute} from 'vue-router';
import usePokemon from '@/composables/usePokemon';
export default {
    name: "Pokemon",
    data() {
        const route = useRoute();
        const { pokemon, errorMessage, isLoading} = usePokemon(route.params.id);

        return {
            pokemon,
            errorMessage,
            isLoading
        }
    },
}
</script>

<style scoped>

</style>
