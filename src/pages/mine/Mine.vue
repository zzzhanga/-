<!--  -->
<template>
  <div>
    <mine-header></mine-header>
    <div class="wrapper" ref="wrapper">
      <div>
        <mine-info :signature="signature" :imgUrl="imgUrl"></mine-info>
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
import axios from 'axios'
export default {
    name: "Mine",
    data () {
        return {
          imgUrl:'',
          signature:''
        };
    },
    components: {
      BottomBar,
      MineHeader,
      MineInfo,
      InformationBar
    },
    methods: {
      getFindInfo(){
        axios.get('/static/mock/mine.json')
          .then(this.getFindInfoSucc)
      },
      getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.imgUrl=data.imgUrl
          this.signature=data.signature
        }
      }
    },
     mounted() {
       this.getFindInfo()
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