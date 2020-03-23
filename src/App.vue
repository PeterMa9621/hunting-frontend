<template>
  <div id="app">
    <navigation></navigation>

    <router-view></router-view>

    <footer>
      <div class="container">
        <div class="row justify-content-center">
          <small class="d-block mt-5 mb-3 text-muted">© Copyright 2019-2020, Peter</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Navigation from "./components/navigation/Navigation";

  export default {
    name: 'App',
    components: {
      Navigation
    },
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
