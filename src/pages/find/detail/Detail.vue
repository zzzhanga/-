<!--  -->
<template>
    <div>
        <header class="header">
            <span class="iconfont back" slot="left" @click="goBack">&#xe624;</span>
            <span class="iconfont people" slot="right">&#xe647;</span>
        </header>
        <div class="wrapper" ref="wrapper">
            <div>
                <detail-wonderful :detailList.sync="detailList" :detailItem.sync="detailItem"></detail-wonderful>
            </div>
        </div>
        <detail-bar></detail-bar>

    </div>
  
</template>

<script>
import BottomBar from "./../../../components/Bar";
import Bscroll from 'better-scroll'
import DetailWonderful from './components/wonderful'
import DetailBar from './components/detailbar'
import axios from 'axios'
export default {
    name:'Detail',
    data () {
        return {
            detailList:{},
            detailItem:[],
            visible: true
        };
    },
    components: {
        DetailWonderful,
        DetailBar

    },
    methods: {
      goBack(){
          this.$router.push('/')
      },
      getFindInfo(){
        axios.get('/static/mock/find.json')
          .then(this.getFindInfoSucc)
      },
      getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.detailList=data.detailList
          this.detailItem=data.detailItem
        }
      }
    },
    mounted() {
        this.getFindInfo()
        this.scroll=new Bscroll(this.$refs.wrapper)
    },
}
</script>
<style lang='stylus' scoped>
    .header
        line-height 1rem
        .back
        float left
            font-size .5rem
        .people
            float right 
            position relative
            right .6rem
            font-size .4rem
            &:after
                position absolute
                top -0.1rem
                content "19"
                font-size .08rem
    .wrapper
        position absolute
        top 1rem
        left 0
        right 0
        bottom 0
        overflow hidden

</style>