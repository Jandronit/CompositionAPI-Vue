<script>
import {defineComponent, ref} from "vue";
export default defineComponent( {
    name: "Counter",
    props: {},
    emits: [],
    setup() {
        const counter = ref(0);
        // const increase = () => {
        //     counter.value++;
        // };
        // const decrease = () => {
        //     counter.value--;
        // };
        return {
            counter,
            increase: () => counter.value++, // increase,
            decrease: () => counter.value--, // decrease,
        };
    },
});
</script>
<template>
    <h1>Counter View</h1>
    <h2>{{counter}}</h2>
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
</template>


<style>

</style>
