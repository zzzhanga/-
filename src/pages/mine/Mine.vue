<!--  -->
<template>
  <div>
    <mine-header></mine-header>
    <div class="wrapper" ref="wrapper">
      <div>
        <mine-info></mine-info>
        <information-bar></information-bar>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import BottomBar from '../../components/Bar'
import MineHeader from './components/header'
import MineInfo from './components/info'
import InformationBar from './components/InformationBar'
export default {
    name: "Mine",
    data () {
        return {
        };
    },
    components: {
      BottomBar,
      MineHeader,
      MineInfo,
      InformationBar
    },
     mounted() {
      this.scroll=new Bscroll(this.$refs.wrapper)
   }  
}

</script>
<style lang='stylus' scoped>
    .wrapper
      position absolute
      top 1rem
      left 0
      right 0
      bottom 0
      overflow hidden
</style>