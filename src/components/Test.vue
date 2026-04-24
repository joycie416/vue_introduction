<script lang="ts">
export default {
  data() {
    return {
      library: "Vue.js",
      content: "데이터 정의와 데이터 보간법",
    };
  },
};
</script>

<template>
  <div>
    <h1>현재 사용중인 라이브러리 : {{ library }}</h1>
    <h2>기초 문법 이해하기 1 : {{ content }}</h2>
  </div>
</template>

<style scoped></style>
