<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'events-list' }">List</router-link>
      <router-link :to="{ name: 'events-create' }">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* max-width: 500px;
  margin: 0 auto;
  padding: 0 20px 20px;
  box-sizing: border-box; */
}

/* a {
  text-decoration: none;
} */

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a + a:before {
  content: "|";
  margin: 0 0.2em;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
