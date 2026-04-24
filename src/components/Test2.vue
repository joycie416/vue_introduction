<script lang="ts">
export default {
  data() {
    return {
      className: "title",
      isActive: true,
    };
  },
};
</script>

<template>
  <div>
    <!-- class에 title 바인딩 -->
    <h1 v-bind:class="className">How to use v-bind</h1>
    <!-- isActive가 true일 때 active 클래스 적용 -->
    <!-- !isActive라고 하면 class에 빈문자열 적용됨 -->
    <h1 v-bind:class="{ active: isActive }">How to use v-bind</h1>
    <!-- 위 내용을 축약하여 아래처럼 적용 가능 -->
    <h1 :class="className">How to use v-bind</h1>
    <h1 :class="{ active: isActive }">How to use v-bind</h1>
  </div>
</template>

<style scoped>
h1.active {
  color: green;
}
.title {
  color: orange;
}
</style>

<!-- 
v-bind : 데이터와 HTML 요소의 속성 간의 바인딩을 처리하는 핵심 디렉티브
-->
