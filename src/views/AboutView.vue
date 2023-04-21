<template>
  <div class="about">
    <h1>{{ title}}</h1>
      <button @click="changeTitle">Change Title</button>
  </div>
</template>
<script >
import {
    ref,
    defineComponent, onActivated,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate, onDeactivated,
    onErrorCaptured,
    onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch,
    onUnmounted,
    onUpdated
} from 'vue';
export default defineComponent({
  name: 'AboutView',
  setup() {
      const title = ref('AboutView')
      console.log('AboutView')
      onMounted(() => {
        console.log('mounted!')
      })
      onUpdated(() => {
        console.log('updated!')
      })
      onUnmounted(() => {
        console.log('unmounted!')
      })
      onBeforeMount(() => {
        console.log('beforeMount!')
      })
      onBeforeUpdate(() => {
        console.log('beforeUpdate!')
      })
      onBeforeUnmount(() => {
        console.log('beforeUnmount!')
      })
      onErrorCaptured(() => {
        console.log('errorCaptured!')
      })
      onRenderTracked(() => {
        console.log('renderTracked!')
      })
      onRenderTriggered(() => {
        console.log('renderTriggered!')
      })
      onActivated(() => {
        console.log('activated!')
      })
      onDeactivated(() => {
        console.log('deactivated!')
      })
      onServerPrefetch(() => {
        console.log('serverPrefetch!')
      })
      return {
          title,
          changeTitle: () => title.value = 'New Title'
      }
  },

});
</script>
