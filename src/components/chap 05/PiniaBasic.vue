<script lang="ts">
import { useCounterStore } from "@/stores";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      // 스토어 호출하기기
      counter: useCounterStore(),
      divider: 2,
      newCount: 1,
    };
  },
  computed: {
    doubleCount() {
      return this.counter.doubleCount;
    },
    doublePlusOne() {
      return this.counter.doublePlusOne;
    },
    getRemainderOfCounter(divider: number) {
      return this.counter.getRemainderOfCounter(divider);
    },
  },
  methods: {
    increment() {
      this.counter.increment();
    },
    randomizeCounter() {
      this.counter.randomizeCounter();
    },
    setCounter(num: number) {
      if (num > 0) this.counter.setCounter(num);
    },
  },
});
</script>

<template>
  <div>
    <p>Count : {{ counter.count }}</p>
    <p>Double Count : {{ counter.doubleCount }}</p>
    <p>Double Plus One Count : {{ counter.doublePlusOne }}</p>
    <button @click="increment">+1</button>
    <button @click="randomizeCounter">랜덤 카운터</button>
    <div>
      <p>Remainder of Count : {{ counter.getRemainderOfCounter(divider) }}</p>
      <input type="number" min="1" v-model="divider" />
    </div>
    <div>
      <input type="number" min="1" v-model="newCount" />
      <button @click="() => setCounter(newCount)">카운터 변경</button>
    </div>
  </div>
</template>
