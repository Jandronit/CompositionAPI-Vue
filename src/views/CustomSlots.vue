<script>
import { defineComponent } from 'vue';
import Modal from "@/components/Modal.vue";
export default defineComponent({
    name: "CustomSlots",
    components: {
        Modal,
    },
    setup() {
        return {

        }
    },
});
</script>
<template>
    <h1>Slots learning</h1>
    <button>Open Modal</button>
  <Modal></Modal>
</template>
<style scoped>

</style>
