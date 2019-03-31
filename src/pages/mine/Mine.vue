<!--  -->
<template>
  <div>
    <search-bar class="mine-header">
      <span class="iconfont" slot="left">&#xe623;</span>
      <span slot="center">{{this.name}}</span>
      <span slot="right" class="iconfont">&#xe632;</span>
    </search-bar>
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
import SearchBar from "./../../components/SearchBar";
import MineInfo from './components/info'
import InformationBar from './components/InformationBar'
import axios from 'axios'
export default {
    name: "Mine",
    data () {
        return {
          imgUrl:'',
          signature:'',
          name:'沧海的雨季',
          visible: true   
        };
    },
    components: {
      BottomBar,
      SearchBar,
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
    .mine-header >>> .mine-navbar-center
      text-align center
    .wrapper
      position absolute
      top 1rem
      left 0
      right 0
      bottom 0
      overflow hidden
</style>