<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      question: "",
      answer: "질문에는 보통 물음표가 들어 있습니다. ;-)",
      loading: false,
    };
  },
  // watcher
  // 상태 변화에 반응하여 부수 효과를 수행해야 하는 경우 사용
  // ex: DOM 변경, 비동기 작업 결과에 따른 상태 변경
  watch: {
    // question이 변경될 때마다 이 함수가 실행됩니다
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes("?")) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.loading = true;
      this.answer = "생각 중...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "오류! API에 접근할 수 없습니다. " + error;
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<template>
  <p>
    예/아니오로 대답할 수 있는 질문을 해보세요:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
</template>

<style scoped></style>
