<script lang="ts">
export default {
  data() {
    return {
      library: "Vue.js",
      content: "<h2>기초 문법 이해하기 1 : 데이터 정의와 데이터 보간법</h2>",
    };
  },
};
</script>

<template>
  <div>
    <h1>현재 사용중인 라이브러리 : {{ library }}</h1>
    <h2 v-html="content"></h2>
  </div>
</template>

<style scoped></style>

<!-- 
v-html : 문자열을 HTML로 해석하여 표시

** 주의 **
- XSS 공역에 취약함
- 디버깅 어려움
- 렌더링 횟수가 많아져 성능 저하
-->
