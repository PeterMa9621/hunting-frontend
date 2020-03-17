<template>
  <div id="app">
    <navigation></navigation>

    <router-view></router-view>
    <!-- <UserListView class="mt-2" msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  import Navigation from "./components/navigation/Navigation";

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
