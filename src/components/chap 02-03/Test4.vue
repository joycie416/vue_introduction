<script lang="ts">
export default {
  data() {
    return {
      fruit: "",
      price: "",
      items: [
        ["apple", 1200],
        ["grape", 2000],
        ["watermelon", 20000],
        ["banana", 4000],
      ],
      gender: "male",
      checked: false,
    };
  },
  methods: {
    addItem() {
      const fruit = this.fruit.trim();
      const price = Number(this.price.trim());
      if (isNaN(price) || !fruit) {
        return;
      }
      this.items.push([fruit, price]);
      this.fruit = "";
      this.price = "";
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="[itemFruit, itemPrice] in items" :key="itemFruit">
      {{ itemFruit }} - {{ itemPrice.toLocaleString() }}원
    </li>
  </ul>
  <form @submit.prevent="addItem">
    <p>입력중...</p>
    <p>{{ fruit }} - {{ price }}원</p>
    <input v-model="fruit" />
    <!-- 아래 코드도 동작은 하지만, 타입캐스팅의 번거로움과 코드 간결함을 위해 위 v-model 사용 권장 -->
    <input :value="price" @input="price = $event.target.value" />
    <button type="submit">추가</button>
  </form>
  <hr />
  <div>
    <p>Gender : {{ gender }}</p>
    <input type="radio" id="male" value="male" v-model="gender" />
    <label for="male">male</label>
    <input type="radio" id="female" value="female" v-model="gender" />
    <label for="female">female</label>
  </div>
  <div>
    <p>Checked : {{ checked }}</p>
    <input type="checkbox" v-model="checked" />
  </div>
</template>

<style scoped></style>
