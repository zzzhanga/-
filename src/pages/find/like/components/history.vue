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
          v-for="item of lis"
          :key="item.id"
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
            lis:[],
            i:1,
        };
    },
    computed: {
        ...mapState({
            currentkeyword:'keyword'
        })
    },
    methods: {
        clear:function(){
            this.lis=[];
        }
    },
    watch: {
        currentkeyword(){
            this.i++;
            this.lis.push({id:this.i,txt:this.currentkeyword});
            localStorage.item=this.lis
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