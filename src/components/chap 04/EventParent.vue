<script lang="ts">
import { defineComponent } from "vue";
import EventChild from "./EventChild.vue";

export default defineComponent({
  components: { EventChild },
  methods: {
    alertMessage({ user, message }: { user: string; message: string }) {
      alert(`${user} ${message}`);
    },
  },
});
</script>

<template>
  <EventChild @click-event="alertMessage" />
</template>
