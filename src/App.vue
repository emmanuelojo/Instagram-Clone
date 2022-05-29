<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
body {
  background: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #000;
}
</style>
