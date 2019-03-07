<!--  -->
<template>
  <div class="border-bottom" v-if="guessItem.length">
      <header class="header">
          <span>{{guess}}</span>
          <span @click="change">{{updata}}</span>
      </header>
    <section class="container " >
        <router-link to="./detail" tag="div" class="detail-item" v-for="item of items" :key="item.id" >
            <img :src="item.imgurl">
        </router-link>
    </section>
  </div>
</template>

<script>
export default {
    name:'LikeGuess',
    props:{
        guessItem: Array
    },
    data () {
        return {
            guess:'猜你喜欢',
            updata:'换一批',
            items:[],
        };
    },
   computed: {
            changed:function(){
            const r = Array.apply(null, { length: this.guessItem.length })
                .map((n, i) => i)
                .map((n, i, all) => {
                    const j = i + Math.floor(Math.random() * (all.length - i));
                    const v = all[j];
                    all[j] = n;
                    return v;
                })
                .slice(0, 3)
                .map(i => {
                    return this.guessItwm[i];
                });
            return r
        }
   },
   created() {
       console.log(this.guessItem)
       this.items=this.changed;
   },
   methods: {  
        change:function(){
            this.items=this.changed;
            this.guessItem.push(this.items[0]);
            this.guessItem.pop();
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