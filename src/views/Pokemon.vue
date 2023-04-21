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
import {useRoute, onBeforeRouteLeave} from 'vue-router';
import usePokemon from '@/composables/usePokemon';
import {watch, defineComponent} from 'vue';
export default defineComponent( {
    name: "Pokemon",
    data() {
        const route = useRoute();
        const { pokemon, errorMessage, isLoading, searchPokemon} = usePokemon(route.params.id);

        watch(
            () => route.params.id,
            () => searchPokemon(route.params.id)
        )

        onBeforeRouteLeave((to, from, next) => {

            const answer = window.confirm('Are you sure you want to leave?');

            if (!answer) {
                next(false);
            } else {
                next();
            }
        })

        return {
            pokemon,
            errorMessage,
            isLoading
        }
    },
});
</script>

<style scoped>

</style>
