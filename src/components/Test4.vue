<script lang="ts">
export default {
  data() {
    return {
      items: [
        ["apple", 1200],
        ["grape", 2000],
        ["watermelon", 20000],
        ["banana", 4000],
      ],
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item[0]">
      {{ item[0] }} - {{ item[1].toLocaleString() }}원
    </li>
  </ul>
  <ul>
    <li v-for="[fruit, price] in items" :key="fruit">
      {{ fruit }} - {{ price.toLocaleString() }}원
    </li>
  </ul>
</template>

<style scoped></style>

<!-- 
v-html : 문자열을 HTML로 해석하여 표시

** 주의 **
- XSS 공역에 취약함
- 디버깅 어려움
- 렌더링 횟수가 많아져 성능 저하
-->
