<template>
  <div>
    <search-bar :link="link"></search-bar>
    <find-card></find-card>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from './../../components/Bar'
import SearchBar  from './../../components/SearchBar'
import FindCard  from './components/card'
export default {
    name: "Find",
    data() {
      return {
        link:'/like/'
      }
    },
    components:{
      SearchBar,
      FindCard,
      BottomBar 
    }
}

</script>
<style scoped>
</style>