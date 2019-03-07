<template>
  <div class="message">
     <div 
        class="message-item" 
        v-for="item of items"
        :key="item.id"
     >
         <span class="message-title">{{item.txt}}</span>
         <img class="message-img" :src="item.imgUrl" alt="">
     </div>
     <p class="message-updata border-bottom" @click="change">换一批</p>
  </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            items:[],
            list:[{
                id:"001",
                txt:"我,今年32岁,存款为0:三十不立,才是真实的人生",
                imgUrl:"/api/m1.png"
            },
            {
                id:"002",
                txt:"咪蒙消失了,我并不开心",
                imgUrl:"/api/m2.png"
            },
            {
                id:"003",
                txt:"刘德华负债4000万的背后,藏着8个人的秘密",
                imgUrl:"/api/m3.png"
            },
            {
                id:"004",
                txt:"春心莫共花争发,一寸相思一寸灰",
                imgUrl:"/api/m4.png"
            },
            {
                id:"005",
                txt:"终极好物清单|若能拥有这些,简直一生圆满",
                imgUrl:"/api/m5.png"
            },
            {
                id:"006",
                txt:"最强升级系统小说",
                imgUrl:"/api/m6.png"
            },
            {
                id:"007",
                txt:"人没朋友会死吗?",
                imgUrl:"/api/m7.png"
            },
            {
                id:"008",
                txt:"穿高跟鞋的女人,和穿平底鞋的女人",
                imgUrl:"/api/m8.png"
            },
            {
                id:"009",
                txt:"章子怡跌落『神坛』: 中国女人活该将就?",
                imgUrl:"/api/m9.png"
            },
            {
                id:"010",
                txt:"最能反映一个人的人生意义的事情",
                imgUrl:"/api/m10.png"
            },
            {
                id:"011",
                txt:"这就是我想要的幸福",
                imgUrl:"/api/m11.png"
            }]
        }
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