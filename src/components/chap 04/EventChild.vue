<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["click-event"],
  data() {
    return {
      message: "클릭!",
    };
  },
  methods: {
    // 메서드에 전달받은 함수 사용
    handleClick(payload: { user: string; message: string }) {
      this.$emit("click-event", payload);
    },
  },
});
</script>

<template>
  <!-- 템플릿 내부에서 직접 사용
   * 템플릿 내에서는 this를 사용하지 않아도 정상 동작함 
  -->
  <button @click="$emit('click-event', { user: '홍길동', message })">
    클릭1
  </button>
  <!-- 매서드 사용 -->
  <button @click="handleClick({ user: '김철수', message: '안녕하세용' })">
    클릭2
  </button>
</template>
