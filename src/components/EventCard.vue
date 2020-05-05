<template>
  <router-link :to="{ name: 'events-show', params: { id } }">
    <div class="event-card">
      <h2>{{ title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["title", "id"]
};
</script>

<style scoped>
.event-card {
  padding: 2em;
  margin-bottom: 1em;
  transition: all 0.5s linear;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
