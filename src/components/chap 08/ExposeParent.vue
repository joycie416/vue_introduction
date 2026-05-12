<template>
  <div>
    <ExposeChild ref="childRef" />
    <!-- useTemplateRef : ref에 키를 입력 -->
    <ExposeChild ref="child-ref" />
    <button @click="getData">자식 컴포넌트 데이터/메서드 조회</button>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import ExposeChild from "./ExposeChild.vue";

const childRef = ref<InstanceType<typeof ExposeChild> | null>(null);
// vue 3.5+에서는 useTemplateRef를 사용해 반응형 상태와, DOM ref를 구분함
// 템플릿에 입력한 ref 키를 인수로 받음
// 인수로 입력한 값을 ref키로 갖는 요소에 접근함
const childRef2 = useTemplateRef<InstanceType<typeof ExposeChild>>("child-ref");

/**
 * cf) 자식 요소가 제네릭 컴포넌트인 경우 useTemplateRef의 제네릭에 InstanceType 대신 ComponentExposed를 사용해야 함.
 */

const getData = () => {
  childRef.value.getUser();
  console.log("---");
  childRef2.value.getUser();
};
</script>
