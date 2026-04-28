<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      nameData: "홍",
      genderData: "male",
    };
  },
  /*
   * 계산된 속성 computed property
   * 캐시: 사용된 데이터가 변경될 때에만 최신화 진행
   */
  computed: {
    // 기본적으로 getter 전용
    fullInfo() {
      return `${this.nameData} (${this.genderData === "male" ? "남" : "여"})`;
    },
    name: {
      get(): string {
        return `${this.nameData}`;
      },
      // setter를 사용해 데이터를 업데이트할 수 있음
      set(newName: string): void {
        this.nameData = newName.trim();
      },
    },
    gender: {
      get(): string {
        return this.genderData;
      },
      set(newGender: string): void {
        if (newGender === "male") {
          this.genderData = newGender;
        } else {
          this.genderData = "female";
        }
      },
    },
  },
});
</script>

<template>
  <p style="white-space: pre">{{ fullInfo }}</p>
  <h2 style="white-space: pre">{{ name }}</h2>
  <!-- setter가 있는 계산된 속성을 사용해 v-model에 바로 사용할 수 있음 -->
  <input v-model="name" />

  <div>
    <input type="radio" id="male" value="male" v-model="gender" />
    <label for="male">male</label>
    <input type="radio" id="female" value="female" v-model="gender" />
    <label for="female">female</label>
  </div>
</template>

<style scoped></style>
