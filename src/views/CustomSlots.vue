<script>
import {defineComponent, ref} from 'vue';
import Modal from "@/components/Modal.vue";
export default defineComponent({
    name: "CustomSlots",
    components: {
        Modal,
    },
    setup() {
        const isOpen = ref(false);
        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    },
});
</script>
<template>
    <h1>Slots learning</h1>
    <button @click="openModal">Open Modal</button>
  <Modal v-if="isOpen" title="Hello World" @on:close="closeModal">
      <template #header>
          <h1>Header</h1>
      </template>
      <template #body>
          <p>Lorem ipsum dolor</p>
      </template>
      <template #footer>
          <button @click="closeModal">Close</button>
      </template>

      <template #exposed="{newTitle}">
          <h1>{{ newTitle }}</h1>
      </template>
  </Modal>
</template>
<style scoped>

</style>
