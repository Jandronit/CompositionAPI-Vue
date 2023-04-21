<template>
  <h1>Pokemon</h1>
</template>

<script>
import {useRoute} from 'vue-router';

export default {
    name: "Pokemon",
    data() {
        const route = useRoute();
        console.log(route.params);
    },
}
</script>

<style scoped>

</style>
