<template>
      <div class="idea">
        <header class="head" >想法  
          <span class="iconfont icon" @click="goTo">&#xe7b9;</span>
        </header>
        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit"> 
            <message class="message" :dataList="dataList" @UpData="updata"></message>
            <discuss class="discuss" :items="items" ></discuss>   
        </mescroll-vue>
        <bottom-bar></bottom-bar>
     </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import BottomBar from '../../components/Bar'
import Message from './components/Message'
import Discuss from './components/Discuss'
import axios from 'axios'

export default {
    name: "idea",
    data () {
        return {
            items:[],
            message:[],
            mescroll: null,
            mescrollDown:{
              callback: this.downCallback, 
            }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了
            mescrollUp: { // 上拉加载的配置.
              callback: this.upCallback, 
              isBounce:true
            },// 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
            dataList: [], // 列表数据
            items:[]
        }
    },
    components: {
        MescrollVue,
        Message,
        Discuss,
        BottomBar 
    },
    methods: {
      mescrollInit (mescroll) {
			      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      },
      updata(e){
        this.mescroll.triggerDownScroll();
      },
      upCallback(page,mescroll){
        axios.get('/static/mock/idea.json')
        .then((response)=>{
          // 请求的列表数据
          //随机获取3条数据
          this.items=response.data.data.items;
          let i=Math.floor(Math.random()*9);
          let arr = response.data.data.message.splice(i,3);
          this.items=response.data.data.items;
          // 如果是第一页需手动制空列表
          if(page.num===1) this.dataList=[]
          // 把请求到的数据添加到列表
          this.dataList=this.dataList.concat(arr)
           // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(()=>{
            mescroll.endSuccess(arr.length)
          })
        }).catch((e)=>{
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
      },
      goTo(){
        this.$router.push("/ideawrite")
      }
    }
}

</script>
<style lang="stylus" scoped>
    .mescroll 
        position:fixed;
        top 44px;
        bottom 50px;
        height auto
    .head
        position absolute
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

</style>