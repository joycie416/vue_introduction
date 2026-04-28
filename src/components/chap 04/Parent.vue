<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  // 사용할 컴포넌트 등록해야 template 태그 내에서 사용 가능
  components: { Child },
  data() {
    return {
      items: [["Title1", "Subtitle1"], ["Title2"], ["Title3", "Subtitle3"]],
    };
  },
});
</script>

<template>
  <Child v-for="item in items" :title="item[0]" :subTitle="item[1]" />
</template>
