<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="increment">+1</button>
    <h2>{{ user1 }}</h2>
    <h2>{{ user1.name }}</h2>
    <h2>{{ user1.age }}</h2>
    <button @click="incrementUser1Age">나이 +1</button>
    <h2>{{ user2.name }}</h2>
    <h2>{{ user2.age }}</h2>
    <button @click="incrementUser2Age">나이 +1</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

// ref - 원시 자료형 데이터
// .value를 사용해 데이터 값을 가져올 수 있음
const count = ref(0);

const increment = () => {
  count.value++;
};

// ref - 참조 자료형 데이터 (추천하지 않음)
// 템플릿에서는 자동으로 .value를 언래핑해주지만
// user1.value.name 처럼 .value를 사용해야하므로 코드가 길어짐
const user1 = ref({
  name: "김철수",
  age: 22,
});

const incrementUser1Age = () => {
  // user1.age++; 동작하지 않음
  user1.value.age++;
};

// reactive - 참조 자료형 데이터
// reactive를 사용해 참조 자료형 데이터를 래핑한 경우
// ref처럼 .value를 사용하지 않고 내부 값을 바로 호출할 수 있음
// ref와 달리 원시 자료형 데이터를 할당할 수 없음
const user2 = reactive({
  name: "홍길동",
  age: 13,
});

const incrementUser2Age = () => {
  user2.age++;
  // user2.value.age++; 동작하지 않음
};
</script>
