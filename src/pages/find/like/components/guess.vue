<!--  -->
<template>
  <div class="border-bottom" >
      <header class="header">
          <span>{{guess}}</span>
          <span @click="change" >{{updata}}</span>
      </header>
    <section class="container" v-if="this.Items.length">
        <router-link to="./detail" tag="div" class="detail-item" v-for="item of Items" :key="item.id" >
            <img :src="item.imgUrl">
        </router-link>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LikeGuess',
    data () {
        return {
            guess:'猜你喜欢',
            updata:'换一批',
            guessItem:[],
            Items:[],
        };
    },
    computed: {
        //获取随机数
        changed:function(){
            if(this.guessItem.length){
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
                    return this.guessItem[i];
                });
                return r
            }
        }
   },
   mounted(){
       this.getFindInfo()
   },
   methods: {  
        getFindInfo(){
        axios.get('./api/find.json')
            .then(this.getFindInfoSucc)
        },
        getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
            const data=res.data
            this.guessItem=data.guessItem
            this.Items=data.Items
            
        }
        },

        change:function(){
            //当前现实的数组等于随机算出来的数组
            this.Items=this.changed;
            //更新数据
            this.guessItem.push(this.guessItem[0]);
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