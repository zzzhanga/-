<!--  -->
<template>
    <div>
      <like-search></like-search>
      <div class="like" ref="wrapper">
          <div>
              <like-guess :guessItem="guessItem"></like-guess>
              <like-history></like-history>
          </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import LikeSearch from './components/LikeSearch'
import LikeGuess from './components/guess'
import LikeHistory from './components/history'
import axios from 'axios'
export default {
  components: {
      LikeSearch,
      LikeGuess,
      LikeHistory
  },
  data () {
    return {
      guessItem:[]
    }
  },
  mounted() {
      this.getFindInfo()
      this.scroll=new Bscroll(this.$refs.wrapper)
  },
   methods: {
      getFindInfo(){
        axios.get('./api/find.json')
          .then(this.getFindInfoSucc)
      },
      getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.guessItem=data.guessItem
        }
      }
    },

}

</script>
<style lang='stylus' scoped>
    .like
      position absolute
      top 1.8rem
      left 0
      right 0
      bottom 0
      overflow hidden
</style>