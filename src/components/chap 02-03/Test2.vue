<script lang="ts">
export default {
  data() {
    return {
      fontColor: "#888888",
      fontSize: 32,
    };
  },
};
</script>

<template>
  <div>
    <!-- 인라인 스타일 -->
    <h3 style="color: red; font-size: 24px">Inline Style</h3>
    <!-- 스타일 바인딩 -->
    <h3 :style="{ color: fontColor, fontSize: fontSize + 'px' }">
      Style Binding
    </h3>
  </div>
</template>

<style scoped></style>

<!-- 
v-bind : 데이터와 HTML 요소의 속성 간의 바인딩을 처리하는 핵심 디렉티브
-->
