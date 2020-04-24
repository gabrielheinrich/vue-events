<template>
  <div>
    <h1>Events Listing</h1>
    <router-link :to="{ name: 'events-show', params: { id: 42 } }"
      >Event 42</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
