<template>
  <EventChild
    name="김영희"
    age="30"
    :address="{ city: '서울' }"
    @send-message="handleSendMessage"
    @popup-alert="handlePopupAlert"
  />
</template>

<script setup lang="ts">
import EventChild from "./EventChild.vue";

const handleSendMessage = (message: string) => {
  alert(message);
};
const handlePopupAlert = (message: string, number?: number) => {
  alert(`${message}, ${number}`);
};
</script>
