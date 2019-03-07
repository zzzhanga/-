<!--  -->
<template>
  <div class="history">
      <header class="history-header">
          <span>{{this.$store.state.keyword}}</span>
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
export default {
    name:'LikeHistory',
    data () {
        return {
            lis:[],
            key:this.$store.state.keyword,
            i:0,
        };
    },
    methods: {
        clear:function(){
            this.lis=[];
        }
    },
    watch: {
        key(){
            console.log(this.key)
            this.i+1;
            this.lis.push({id:this.i,txt:this.key})
        }
    },
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