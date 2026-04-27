<script lang="ts">
export default {
  data() {
    return {
      isVisible: true,
      message: "Visible when isVisible is true",

      score: 75,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    increaseScore() {
      const score = this.score;
      if (score + 5 <= 100) this.score += 5;
    },
    decreaseScore() {
      const score = this.score;
      if (score - 5 >= 0) this.score -= 5;
    },
  },
};
</script>

<template>
  <div>
    <h1>조건부 렌더링</h1>
    <h3>isVisible : {{ isVisible }}</h3>
    <p v-if="isVisible">{{ message }}</p>
    <p v-show="isVisible">{{ message }}</p>
    <button @click="toggleVisibility">Toggle Visibility</button>
    <hr />
    <!-- v-if, v-else-if, v-else -->
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      "
    >
      <button @click="decreaseScore">Decrease Score</button>
      <h3>score : {{ score }}</h3>
      <button @click="increaseScore">Increase Score</button>
    </div>
    <p v-if="score >= 80">You got A</p>
    <p v-else-if="score >= 60">You got B</p>
    <p v-else>You failed the exam</p>
    <hr />
  </div>
</template>

<style scoped></style>

<!-- 
v-if vs. v-show
* v-show
  display: none 속성을 이용해 보이지 않게 하므로
  보이지 않을뿐 여전히 DOM에 존재함.
  따라서 자주 표시하거나 숨겨야하는 요소의 경우 유용함.

* v-if
  조건에 따라 렌더링 여부가 달라짐
  따라서 처음부터 만들 필요 없는 무거운 컴포넌트나
  조건이 자주 바뀌지 않는 경우에 적합함함
-->
