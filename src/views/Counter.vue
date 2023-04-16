<script>
import { defineComponent } from "vue";
import useCounter from "@/composables/useCounter";
export default defineComponent( {
    name: "Counter",
    props: {},
    emits: [],
    setup() {
        const { counter, increase, decrease } = useCounter(25)
        return { counter, increase, decrease };
    },
});
</script>
<template>
    <h1>Counter View</h1>
    <h2>{{counter}}</h2>
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
</template>
