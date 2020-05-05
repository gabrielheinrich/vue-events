<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.date }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { getEvent } from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      event: null
    };
  },
  created() {
    getEvent(this.id).then(response => {
      this.event = response.data;
    });
  }
};
</script>

<style scoped></style>
