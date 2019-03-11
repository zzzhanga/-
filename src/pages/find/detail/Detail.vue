<!--  -->
<template>
    <div>
        <header class="header">
            <router-link tag="span" to="/" class="iconfont back">&#xe624;</router-link>
            <span class="iconfont people">&#xe647;</span>
        </header>
        <div class="wrapper" ref="wrapper">
            <div>
                <detail-wonderful :detailList="detailList" :detailItem="detailItem"></detail-wonderful>
            </div>
        </div>
        <detail-bar></detail-bar>

    </div>
  
</template>

<script>
import Bscroll from 'better-scroll'
import DetailWonderful from './components/wonderful'
import DetailBar from './components/detailbar'
import axios from 'axios'
export default {
    name:'Detail',
    data () {
        return {
            detailList:{},
            detailItem:[]
        };
    },
    components: {
        DetailWonderful,
        DetailBar

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
        position fixed
        top 0
        z-index 2
        height 1rem
        line-height 1rem
        padding .1rem .2rem
        background #fff
        width 100%
        .back
            font-size .5rem
            float left
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
                display inline
    .wrapper
        position absolute
        top 1rem
        left 0
        right 0
        bottom 0
        overflow hidden

</style>