<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>

  import Header from './components/Header'

  export default {
    components: {
      appHeader: Header,
      name: 'App',
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: gray;*/
    /*margin-top: 60px;*/
  }
</style>
