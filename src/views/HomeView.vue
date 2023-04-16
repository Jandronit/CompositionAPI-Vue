<script>
import {defineComponent, ref, reactive} from 'vue';
export default defineComponent({
  name: 'HomeView',
  setup() {
    const ironman = ref({name: 'Tony Stark', age: 45});
    const hulk = reactive({name: 'Bruce Banner', age: 45});

    const ironmanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
        hulkIsAlive.value = !hulkIsAlive.value;
        // not working
        // ironmanIsAlive = !ironmanIsAlive;
    }
      return {
        ironman,
        hulk,
        ironmanIsAlive,
        hulkIsAlive,
        changeStatus,
        changeIronman: () => {
            ironman.value.name = 'Ironman';
            ironman.value.age = 50;
        },
        changeHulk: () => {
            hulk.name = 'Hulk';
            hulk.age = 50;
        }
      };
  },
})
</script>
<template>
    <div class="home">
        <h1>Reactive vs Ref</h1>
        <h3>{{ironman}}</h3>
        <h3>{{hulk}}</h3>

        <button @click="changeIronman">Change Ironman</button>
        <button @click="changeHulk">Change Hulk</button>

        <h3>Ironman:{{ironmanIsAlive}}</h3>
        <h3>Hulk:{{hulkIsAlive}}</h3>

        <button @click="changeStatus">Change Hulk Status</button>
    </div>
</template>
