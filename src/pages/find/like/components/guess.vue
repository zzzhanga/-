<!--  -->
<template>
  <div>
      <header class="header">
          <span>{{guess}}</span>
          <span>{{updata}}</span>
      </header>
      <section class="container">
          <div 
          class="detail-item"
          v-for="(item, index ) of list"
          :key="item.id"
          >
              <img :src="item.imgurl" alt="" @click="btnClick(index,item.id)">
          </div>
      </section>
  </div>
</template>

<script>

export default {
    name:'LikeGuess',
    data () {
        return {
            guess:'猜你喜欢',
            updata:'换一批',
            list:[{
                id:'1',
                imgurl:'../../../../../static/image/guess1.png'
            },{
                id:'2',
                imgurl:'../../../../../static/image/guess2.png'
            },{
                id:'3',
                imgurl:'../../../../../static/image/guess3.png'
            },{
                id:'4',
                imgurl:'../../../../../static/image/guess4.png'
            },{
                id:'5',
                imgurl:'../../../../../static/image/guess5.png'
            },{
                id:'6',
                imgurl:'../../../../../static/image/guess6.png'
            },{
                id:'7',
                imgurl:'../../../../../static/image/guess7.png'
            },{
                id:'8',
                imgurl:'../../../../../static/image/guess8.png'
            },{
                id:'9',
                imgurl:'../../../../../static/image/guess9.png'
            }]
        };
    },
    mounted() {

    },
    methods: {
    }

}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        margin-top .4rem
        padding 0 .2rem
        font-size .24rem
        display flex
        justify-content space-between
        span:last-child
            color $Color
    .container
        padding .2rem .1rem
        height 6.2rem
        overflow hidden
        .detail-item
            padding .2rem
            img 
                max-width 100%
                max-height 100%
                width auto 
                height auto
        
</style>