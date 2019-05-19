<template>
  <div id="app">
    <keep-alive include="bookdetail,idea,Listener">
      <router-view/>
    </keep-alive>
    <tab-bar/>
    <listener></listener>
  </div>
</template>

<script>
import Listener from './components/listener.vue'
import TabBar from './components/TabBar'
export default {
  name: 'App',
  components: {
    Listener,
    TabBar
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
