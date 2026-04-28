<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      formData: {
        name: "",
        age: "",
      },
    };
  },
  // watcher
  // 상태 변화에 반응하여 부수 효과를 수행해야 하는 경우 사용
  // ex: DOM 변경, 비동기 작업 결과에 따른 상태 변경
  watch: {
    // formData가 변경될 때마다 이 함수가 실행됨됨
    formData: {
      handler(newValue, oldValue) {
        console.log("formData has been changed", newValue);
      },

      // 객체, 배열 등 내부요소가 있는 경우 사용
      deep: true, // false인 경우 formData의 내부데이터의 변경사항이 감지되지 않음

      // 렌더링 직후 실행 여부
      // immediate: true,
    },
    // data의 값이나 formData, formData.name, formData.name
    // 필요시 여러 특정 값들을 묶어서 watch를 해야한다면 computed에 배열 등으로 새로운 값을 만들어 부수 효과를 줄 수 있음음
  },
});
</script>

<template>
  <h2>내 정보</h2>
  <p>이름 : {{ formData.name }}</p>
  <p>나이 : {{ formData.age }}</p>
  <input v-model="formData.name" />
  <input v-model="formData.age" />
</template>

<style scoped></style>
