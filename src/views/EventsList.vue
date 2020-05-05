<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :title="event.title" :id="event.id" :key="event.id"></EventCard>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { getEvents } from "@/services/EventService.js";

export default {
  data() {
    return {
      events: []
    };
  },
  components: {
    EventCard: EventCard
  },
  created() {
    getEvents().then(response => {
      this.events = response.data;
    });
  }
};
</script>

<style scoped></style>
