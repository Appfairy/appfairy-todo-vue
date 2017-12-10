<template>
  <div id="app">
    <af-todo-list />
  </div>
</template>

<script>
  import './components';

  export default {
    name: 'app'
  };
</script>

<style>
  html, body, #root {
    height: 100%;
    font: icon;
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  }
</style>
