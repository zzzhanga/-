<template>
  <div class="message">
     <div 
        class="message-item" 
        v-for="item of mhome"
        :key="item.id"
     >
         <span class="message-title">{{item.txt}}</span>
         <img class="message-img" :src="item.imgUrl" alt="">
     </div>
     <p class="message-updata border-bottom" @click="change">换一批</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Message",
    data() {
        return {
            message:[],
            mhome:[]
        }
    },
    computed: {
        changed:function(){
            const r = Array.apply(null, { length: this.message.length })
                .map((n, i) => i)
                .map((n, i, all) => {
                    const j = i + Math.floor(Math.random() * (all.length - i));
                    const v = all[j];
                    all[j] = n;
                    return v;
                })
                .slice(0, 3)
                .map(i => {
                    return this.message[i];
                });
            return r
        }
    },
    mounted(){
       this.getFindInfo()
   },
    methods: {

        getFindInfo(){
            axios.get('/static/mock/idea.json')
            .then(this.getFindInfoSucc)
        },
        getFindInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
            const data=res.data
            this.mhome=data.mhome
            this.message=data.message
            }
        },

        change:function(){
            this.mhome=this.changed;
            this.message.push(this.message[0]);
            this.message.pop();
        }
       
    }
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .message
        .message-item
            width 100%
            height 2rem
            .message-title
                float left
                width 4rem
                line-height .6rem
                margin-left .2rem
                margin-right .6rem
            .message-img 
                float right
                width 2rem
        .message-updata
            text-align center
            color $Color
            padding-bottom .2rem

</style>