import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 고유 id가 'main'인 스토어 생성성
export const useCounterStore = defineStore("main", () => {
  // 옵션 api 버전으로 작성된 내용을 컴포지션 api 버전으로 변경

  // state
  const count = ref(10);

  // getters
  const doubleCount = computed(() => count.value * 2);
  const doublePlusOne = computed(() => doubleCount.value + 1);
  const getRemainderOfCounter = computed(() => {
    return (divider: number) => count.value % divider;
  });

  // actions
  const increment = () => {
    count.value++;
  };
  const randomizeCounter = () => {
    count.value = Math.round(100 * Math.random());
  };
  const setCounter = (num: number) => {
    count.value = num;
  };

  return {
    count,
    doubleCount,
    doublePlusOne,
    getRemainderOfCounter,
    increment,
    randomizeCounter,
    setCounter,
  };
});
