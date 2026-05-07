<script lang="ts" setup>
// <script setup> 적용 시 기존 setup() 처럼 자동으로 적용해줌.
import { ref } from "vue";

// 반응형 상대값
const count = ref(0);

// 메서드
const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <p>Count : {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>
