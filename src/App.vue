<template>
  <div id="app">
    <keep-alive include="bookdetail,idea,Listener">
      <router-view/>
    </keep-alive>
    <listener></listener>
  </div>
</template>

<script>
import Listener from './components/listener.vue'
export default {
  name: 'App',
  components: {
    Listener
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
