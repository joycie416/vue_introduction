<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    // 반응형 상대값
    const count = ref(0);

    // 메서드
    const increment = () => {
      count.value++;
    };

    return { count, increment };
  },
};
</script>

<template>
  <div>
    <p>Count : {{ count }}</p>
    <!-- <p>Double Count : {{ counter.doubleCount }}</p>
    <p>Double Plus One Count : {{ counter.doublePlusOne }}</p> -->
    <button @click="increment">+1</button>
    <!-- <button @click="randomizeCounter">랜덤 카운터</button>
    <div>
      <p>Remainder of Count : {{ counter.getRemainderOfCounter(divider) }}</p>
      <input type="number" min="1" v-model="divider" />
    </div>
    <div>
      <input type="number" min="1" v-model="newCount" />
      <button @click="() => setCounter(newCount)">카운터 변경</button>
    </div> -->
  </div>
</template>
