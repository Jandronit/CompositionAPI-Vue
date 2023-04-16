import {ref} from 'vue';

const useCounter = ( initValue = 5) => {

    const counter = ref( initValue );

    return {
        counter,
        increase: () => counter.value++, // increase,
        decrease: () => counter.value--, // decrease,
    };
}
export default useCounter
