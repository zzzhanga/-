<template>
  <div id="app">
    <keep-alive include="idea,Listener" exclude="bookdetail">
      <router-view />
    </keep-alive>
    <tab-bar />
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
  },
  mounted: function () {
    this.showClose()
  },
  methods: {
    showClose () {
      this.$createDialog({
        type: 'alert',
        icon: 'cubeic-alert',
        showClose: true,
        title: '本产品仅作为学习使用！',
        onClose: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击关闭按钮'
          }).show()
        }
      }).show()
    }
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
