<!--  -->
<template>
  <div class="border-bottom">
      <header class="header">
          <span>{{guess}}</span>
          <span @click="change">{{updata}}</span>
      </header>
      <section class="container">
          <div 
          
          class="detail-item"
          v-for="item of items"
          :key="item.id"
          >
              <img :src="item.imgurl">
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
            items:[],
            list:[{
                id:'001',
                imgurl:'../../../../../static/image/guess1.png'
            },{
                id:'002',
                imgurl:'../../../../../static/image/guess2.png'
            },{
                id:'003',
                imgurl:'../../../../../static/image/guess3.png'
            },{
                id:'004',
                imgurl:'../../../../../static/image/guess4.png'
            },{
                id:'005',
                imgurl:'../../../../../static/image/guess5.png'
            },{
                id:'006',
                imgurl:'../../../../../static/image/guess6.png'
            },{
                id:'007',
                imgurl:'../../../../../static/image/guess7.png'
            },{
                id:'008',
                imgurl:'../../../../../static/image/guess8.png'
            },{
                id:'009',
                imgurl:'../../../../../static/image/guess9.png'
            }]
        };
    },
   computed: {
            changed:function(){
            const r = Array.apply(null, { length: this.list.length })
                .map((n, i) => i)
                .map((n, i, all) => {
                    const j = i + Math.floor(Math.random() * (all.length - i));
                    const v = all[j];
                    all[j] = n;
                    return v;
                })
                .slice(0, 3)
                .map(i => {
                    return this.list[i];
                });
            return r
        }
   },
   mounted() {
       this.items=this.changed;
   },
    methods: {
        change:function(){
            this.items=this.changed;
            this.list.push(this.items[0]);
            this.list.pop();
        }
       
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
        height 6rem
        overflow hidden
        .detail-item
            height 1.8rem
            padding .2rem
            img 
                max-width 100%
                max-height 100%
                width auto 
                height auto
        
</style>