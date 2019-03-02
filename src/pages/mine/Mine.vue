<!--  -->
<template>
  <div>
    <mine-header></mine-header>
    <mine-info></mine-info>
    <information-bar></information-bar>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
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
    }
}

</script>
<style scoped>
</style>