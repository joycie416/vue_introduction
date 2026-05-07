<script setup lang="ts">
import { computed, ref } from "vue";

const firstName = ref("John");
const lastName = ref("Kim");

/**
 * computed
 * 사용된 값이 변경됐는지 감지해
 * 변경된 경우 새로운 값을 반환
 * - 읽기 전용으로 사용하기를 권장됨
 */

// firstName, lastName이 변경되면 재계산(캐시)
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

// fullName.length가 바뀌면 재계산
const nameLength = computed(() => {
  return fullName.value.length;
});
</script>

<template>
  <div>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ fullName }}</p>
    <p>{{ nameLength }}</p>
  </div>
</template>
