<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
      default: "부제목 없음",
    },
    content: {
      type: String,
      required: false,
    },
  },
});
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ subTitle }}</p>
    <p v-if="content">{{ content }}</p>
  </div>
</template>

<style scoped></style>
