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
  <Modal>
      <template #header>
          <h1>Header</h1>
      </template>
      <template #body>
          <p>Lorem ipsum dolor</p>
      </template>
      <template #footer>
          <button>Close</button>
      </template>
  </Modal>
</template>
<style scoped>

</style>
