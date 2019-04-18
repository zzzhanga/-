<!--  -->
<template>
  <div>
    <search class="mine-header">
      <span class="iconfont" slot="left">&#xe623;</span>
      <span slot="center">{{this.name}}</span>
      <span slot="right" class="iconfont" @click="goSetting">&#xe632;</span>
    </search>
    <div class="wrapper">
      <cube-scroll   ref="scroll">
        <mine-info :signature="signature" :imgUrl="imgUrl"></mine-info>
        <information-bar></information-bar>
      </cube-scroll>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./../../components/TabBar";
import Search from "./../../components/Search";
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
      TabBar,
      Search,
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
      },
      goSetting(){
        this.$router.push("/setting")
      }
    },
     mounted() {
       this.getFindInfo()
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