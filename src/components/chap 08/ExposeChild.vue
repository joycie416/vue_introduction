<template>
  <div>
    <input ref="searchRef" type="text" placeholder="검색어를 입력하세요." />
    <button @click="focusInput">Focus The Input</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

// template 태그에서 searchRef라는 ref를 사용하여 DOM 요소에 접근
// 초기값 null: DOM 요소가 마운트 후에 생성되므로 초기에는 참조 대상이 없음을 명시
const searchRef = ref(null);

// 버튼 클릭 시 input 요소에 포커스를 주는 함수
const focusInput = () => {
  searchRef.value.focus();
};

// --------------------------

const user = reactive({
  name: "김철수",
  age: 18,
});

const getUser = () => {
  console.log(user);
};

// defineExpose
// 자식 컴포넌트의 내부 변수/메서드를 부모 컴포넌트에서 접근할 수 있도록 공개함
defineExpose({ user, getUser });
</script>

<style scoped></style>
