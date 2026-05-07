<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const user = reactive({
  name: "홍길동",
  address: { city: "서울" },
  age: 20,
});

const changeAge = () => {
  user.age = Math.ceil(Math.random() * 100);
};

watch(
  user,
  (newUser, oldUser) => {
    console.log("--------------WATCH 실행됨-----------------");
    console.log("User Object Changed:", newUser);
  },
  {
    // immediate: true, // 렌더링 직후(감시 시작될 때) 콜백 한번 실행
    // deep: true, // 기본값이 true
  },
);
/**
 * cf)
 * user를 ref로 감싸면 deep:true를 설정해야 내부 속성을 변경 시콜백이 실행되지만
 * user를 reactive로 감싸면 deep:true를 설정하지 않아도 내부 속성 변경 시 콜백이 실행됨
 * 이는 reactive 할당 시 내부적으로 deep:true처럼 작동하기 때문.
 */

setTimeout(() => {
  user.address.city = "런던";
  console.log("user city", user.address.city);
  // user.value.address.city = "런던";
  // console.log("user city", user.value.address.city);
}, 2000);

// 콜백 함수 내부에 사용된 반응형 데이터를 감지해 콜백함수 실행
// composition API에만 있음
// reactive 객체 자체(user)를 넣은 경우에는 내부 속성이 변경되어도 반응하지 않고
// 내부 속성을 읽어야만(user.age) 해당 속성이 변경될 때 반응함
// flush 옵션이 기본적으로 pre이므로 created 직후 1회 실행됨
watchEffect(() => {
  console.log("--------------WATCHEFFECT 실행됨-----------------");
  console.log("user age 변경됨", user.age);
  console.log("count 변경됨", count.value);
});
</script>

<template>
  {{ user }}
  <button @click="changeAge">Random age</button>
  <p>count : {{ count }}</p>
  <button @click="increment">count +1</button>
</template>
