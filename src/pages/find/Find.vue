<template>
  <div>
    <search-bar></search-bar>
    <find-card :cardItem="cardItem"></find-card>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>

import BottomBar from './../../components/Bar'
import SearchBar  from './../../components/SearchBar'
import FindCard  from './components/card'
import axios from 'axios'
export default {
    name: "Find",
    data() {
      return {
        link:'/like/',
        cardItem:[],
      }
    },
    components:{
      SearchBar,
      FindCard,
      BottomBar 
    },
    methods: {
      getFindInfo(){
        axios.get('/static/mock/find.json')
          .then(this.getFindInfoSucc)
      },
      getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.cardItem=data.cardItem
        }
      }
    },
    mounted() {
      this.getFindInfo()
    }
}

</script>
<style scoped>
</style>