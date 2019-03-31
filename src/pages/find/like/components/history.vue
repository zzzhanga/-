<!--  -->
<template>
  <div class="history">
      <header class="history-header">
          <span>历史记录</span>
          <span @click="clear">清空</span>
      </header>
      <ul class="content">
          <li 
          class="items"
          v-for="(item, index) of lis"
          :key="index"
          >
          <span class="iconfont">&#xe634;</span>
            &nbsp; &nbsp;{{item.txt}}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'LikeHistory',
    data () {
        return {
            lis:[]
        };
    },
    mounted () {
        //有缓存    使用缓存
        if(localStorage.item){
            this.lis=JSON.parse(localStorage.item)
        }
    },
    computed: {
        //获取传过来的key值
        ...mapState({
            currentkeyword:'keyword'
        })
    },
    methods: {
        //清空所有内容
        clear:function(){
            console.log(1)
            localStorage.clear()
            this.lis=[]
        }
    },
    watch: {
        //检测搜索传过来的值
        currentkeyword(){
            // 把传过来的值添加到数组
            this.lis.push({txt:this.currentkeyword});
            //把数组存储在缓存内
            var data=JSON.stringify(this.lis) 
            localStorage.item=data
    }
}
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .history-header
        display flex
        height 1rem
        justify-content space-between
        align-items center
        padding 0 .2rem
        font-size .24rem
        :nth-child(2)
            color $Color
    .content
        padding .1rem
        .items
            font-size .24rem
            padding .4rem .2rem

</style>