<template>
      <div class="idea">
        <header class="head" >想法  
          <span class="iconfont icon" @click="goTo">&#xe7b9;</span>
        </header>
        <div class="scroll-list-wrap">
          <cube-scroll 
          ref="scroll" 
          :data="speak"
          @pulling-up="onPullingUp"
          :options="options"  
          >
            <message class="message"></message>
            <discuss :speak="speak" ></discuss>   
          </cube-scroll>
        </div>
        <tab-bar></tab-bar>
     </div>
</template>

<script>
import TabBar from "./../../components/TabBar";
import Message from './components/Message'
import Discuss from './components/Discuss'
import axios from 'axios'
 
let i=0


export default {
    name: "idea",
    data () {
        return {
          speak:[],
          items:[],
          options:{
            pullUpLoad:true
          }
      }
    },
    components: {
        Message,
        Discuss,
        TabBar
    },
    methods: {
      getIdeaInfo(){
        axios.get('/static/mock/idea.json')
          .then(this.getIdeaInfoSucc)
      },
      getIdeaInfoSucc(res){
        res=res.data
        const data=res.data
          if(res.ret && res.data){
          this.speak=data.items.splice(0,5)
          this.items=data.items
        }
      },
      onPullingUp() {
        setTimeout(() => {
          if(i>=14){
            i=0
          }
          this.speak = this.speak.concat(this.items.slice(i,i+5))
          i=i+5
        }, 1000)
      },
      goTo(){
        this.$router.push("/ideawrite")
      }
    },
    mounted() {
      this.getIdeaInfo()
    },
}

</script>
<style lang="stylus" scoped>
    .scroll-list-wrap
      height: 90vh
    .head
          position relative
          z-index 2
          top 0
          background #fff
          width 100%
          height 1rem
          line-height 1rem
          text-align center
          overflow hidden
          .icon
            margin-right .2rem
            font-size .4rem
            float right 
    .message
      height 8rem

</style>