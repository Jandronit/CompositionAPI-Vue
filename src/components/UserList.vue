<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'UserList',
    props: {
        users: {
            type: Array,
            required: true
        }
    }
})
</script>

<template>
    <ul>
        <slot v-for="user in users" :user="user" :key="user.id">
        </slot>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
