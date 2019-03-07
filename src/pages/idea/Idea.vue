<template>
  <div class="idea">
      <header class="head">想法  <router-link to="/ideawrite" tag="span" class="iconfont icon">&#xe7b9;</router-link></header>
      <div class="wrapper" ref="wrapper">
          <div>
            <message ></message>
            <discuss :items="items" ></discuss>   
          </div>
      </div>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import BottomBar from '../../components/Bar'
import Message from './components/Message'
import Discuss from './components/Discuss'
import axios from 'axios'
export default {
    name: "idea",
    data () {
        return {
            items:[]
        }
    },
    components: {
        Message,
        Discuss,
        BottomBar 
    },
    methods: {
      getFindInfo(){
        axios.get('./api/idea.json')
          .then(this.getFindInfoSucc)
      },
      getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.items=data.items
        }
      }
    },
     mounted() {
        this.getFindInfo()
        this.scroll=new Bscroll(this.$refs.wrapper)
  },
}

</script>
<style lang="stylus" scoped>
    .head
        position fixed
        z-index 2
        top 0
        background #fff
        width 100%
        height 1rem
        line-height 1rem
        text-align center
        .icon
            margin-right .2rem
            font-size .4rem
            float right 
    .wrapper
        position absolute
        top 1.2rem
        left 0 
        right 0
        bottom 0
        overflow hidden

</style>