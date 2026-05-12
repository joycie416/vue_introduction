<script setup lang="ts">
import { useCounterStore } from "@/stores";
import { storeToRefs } from "pinia";
import { ref } from "vue";

// 스토어 호출하기기
const counterStore = useCounterStore();
// 스토어 값을 ref로 반환해 반응형 데이터로 변경해줌
const { count, doubleCount, doublePlusOne } = storeToRefs(counterStore);

const divider = ref(2);
const newCount = ref(1);

const getRemainderOfCounter = (divider: number) => {
  return counterStore.getRemainderOfCounter(divider);
};
const increment = () => {
  counterStore.increment();
};
const randomizeCounter = () => {
  counterStore.randomizeCounter();
};
const setCounter = (num: number) => {
  if (num > 0) counterStore.setCounter(num);
};
</script>

<template>
  <div>
    <p>Count : {{ count }}</p>
    <p>Double Count : {{ doubleCount }}</p>
    <p>Double Plus One Count : {{ doublePlusOne }}</p>
    <button @click="increment">+1</button>
    <button @click="randomizeCounter">랜덤 카운터</button>
    <div>
      <p>Remainder of Count : {{ getRemainderOfCounter(divider) }}</p>
      <input type="number" min="1" v-model="divider" />
    </div>
    <div>
      <input type="number" min="1" v-model="newCount" />
      <button @click="() => setCounter(newCount)">카운터 변경</button>
    </div>
  </div>
</template>
