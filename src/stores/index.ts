import { defineStore } from "pinia";

// 고유 id가 'main'인 스토어 생성성
export const useCounterStore = defineStore("main", {
  // 지금까지 옵션 API를 사용했으므로 옵션 스타일로 진행
  state: () => {
    // 초기값
    return {
      count: 10,
    };
  },
  // computed property와 완전히 동일함
  getters: {
    doubleCount: (state) => state.count * 2,
    // 1. 다른 getter를 참조하는 경우 반환 타입 명시해줘야 함 (TS)
    // 2. 화살표 함수를 사용하는 경우 this가 스토어 인스턴스를 가리키지 않으므로 일반 함수 형식 사용
    // 2-1. this를 사용하지 않는다면 화살표 함수 사용 가능
    doublePlusOne(): number {
      return this.doubleCount + 1;
    },
    // getter에 인자를 넘겨주고 싶은 경우, 함수를 반환하도록 작성해 사용할 수 있음
    // 하지만 더이상 캐시되지 않음
    // 내부 데이터를 캐싱하고 싶을 때 사용할 수 있음
    getRemainderOfCounter(state): (divider: number) => number {
      return (divider: number) => state.count % divider;
    },
  },
  actions: {
    // 마찬가지로 this를 사용하는 경우 화살표 함수 사용 불가
    increment() {
      this.count++;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
    setCounter(num: number) {
      this.count = num;
    },
  },
});
