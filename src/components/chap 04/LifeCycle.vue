<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  components: {
    Child,
  },
  data() {
    return {
      count: 10,
      showChild: true,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    toggle() {
      this.showChild = !this.showChild;
    },
  },
  // 라이프사이클 훅
  /**
   * 생성 단계
   */
  beforeCreate() {
    console.log(
      "Life cycle - beforeCreate: 인스턴스 생성 직후 데이터 초기화 이전",
      this.count, // undefined
    );
    // data, props, methods, computed 등은 아직 설정되지 않음음
  },
  created() {
    console.log("Life cycle - created: 데이터, 이벤트 초기화 후", this.count); // 10
    // 데이터 접근 가능
    // 비동기 처리나 초기 로딩 로직 작성에 적합
  },
  /**
   * 마운트 단계
   */
  beforeMount() {
    console.log(
      "Life cycle - beforeMount: DOM 렌더링 직전",
      document.querySelector("h2"), // null
    );
  },
  mounted() {
    console.log(
      "Life cycle - mounted: DOM 렌더링 완료",
      document.querySelector("h2"), // <h2>10</h2>
    );
  },
  /**
   * 업데이트 단계
   * cf: 개발자도구 console에 querySelector 출력 시 참조중인 DOM 객체의 최신상태를 보여주기 때문에 .textContent를 붙여 실행 시점의 내부값을 확인해야 함
   */
  beforeUpdate() {
    console.log("Life cycle - beforeUpdate: DOM 반영 전", this.count); // 11
    console.log(
      "Life cycle - beforeUpdate: 현재 DOM 값",
      document.querySelector("h2")?.textContent,
    ); // 10
  },
  updated() {
    console.log("Life cycle - updated: DOM 업데이트 완료", this.count); // 11
    console.log(
      "Life cycle - updated: 반영된 DOM 값",
      document.querySelector("h2")?.textContent,
    ); // 11
  },
});
</script>

<template>
  <div>
    <button @click="decrease">감소</button>
    <h2>{{ count }}</h2>
    <button @click="increase">증가</button>
  </div>
  <div>
    <Child title="지금은 보인당" v-if="showChild" />
    <button @click="toggle">토글</button>
  </div>
</template>
