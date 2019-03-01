<template>
  <div>
    <find-header></find-header>
    <find-card></find-card>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from './../../components/Bar'
import FindHeader  from './components/header'
import FindCard  from './components/card'
export default {
    name: "Find",
    components:{
      FindHeader,
      FindCard,
      BottomBar 
    }
}

</script>
<style scoped>
</style>