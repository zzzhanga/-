<!--  -->
<template>
  <div class="history">
      <header class="history-header">
          <span>搜索历史</span>
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
    props:{
        value:String,
        i:10
    },
    data () {
        return {
            lis:[{
                id:'001',
                txt:'皮囊'
            },{
                id:'002',
                txt:'刻意练习'
            },{
                id:'003',
                txt:'人月神话'
            },{
                id:'004',
                txt:'滚雪球'
            },{
                id:'005',
                txt:'巴菲特'
            },{
                id:'006',
                txt:'马云这些年'
            },{
                id:'007',
                txt:'这就是马云'
            },{
                id:'008',
                txt:'谈话的力量'
            },{
                id:'009',
                txt:'稀缺'
            },{
                id:'010',
                txt:'好好说话'
            },]
        };
    },
    methods: {
        clear:function(){
            this.lis=[];
        }
    },
    watch: {
        value(){
            this.i+1;
            if(this.value){
                this.lis.push({id:this.i,txt:this.value})
            }

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