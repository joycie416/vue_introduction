<template>
  <h1>{{ props.name }} / {{ props.age }}</h1>
  <h1>{{ name }} / {{ age }}</h1>
  <p>{{ city }}</p>
</template>

<script setup lang="ts">
import { toRef, toRefs } from "vue";

interface User {
  name: string;
  age: string;
  address: {
    city: string;
  };
}

// props 정의

// 각 prop이 단순하면 아래처럼 정의 가능
// const props = defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: String,
//     required: true,
//   },
// });

// 객체 타입 등 더 복잡한 경우 제네릭 이용
const props = defineProps<User>();
// vue 3.5 이상인 경우 구조 분해 할당 해도 반응성을 유지하지만
// 3.5 이전 버전은 구조 분해 할당 시 반응성을 잃음
// 해당 문제를 해결하기 위해 toRef, toRefs 사용

// toRef
// 객체의 특정 속서 하나만 반응형 참조로 만듦
const userName = toRef(props, "name");
// 중첩 객체의 특정 값 하나를 사용하는 경우
// getter 함수를 사용하면 반응성을 유지할 수 있음
const city = toRef(() => props.address.city);

// toRefs
// 객체의 모든 속성을 반응형 참조로 변환
// 중첩 객체의 여러 속성을 한번에 구조 분할하거나 간결한 코드가 중요한 경우에 사용
const { name, age } = toRefs(props);
</script>
