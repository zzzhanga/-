<!--  -->
<template>
    <div class="bottom-bar">
        <router-link  
            :to="item.to" 
            tag="div" 
            class="bar-item" 
            v-for="item of bars"
            :key="item.id"
        >
            <p class="iconfont icon" v-html='item.icon'></p>
            <p class="item-text">{{item.txt}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'BottomBar',
    data() {
        return {
            index:0,
            styObj:{
                color:'0099CC'
            },
            bars:[{
                id:'001',
                to:'/',
                icon:'&#xe663;',
                txt:'发现'
            },{
                id:'002',
                to:'/book/',
                icon:'&#xe60a;',
                txt:'书架'
            },{
                id:'003',
                to:'/Idea/',
                icon:'&#xe64c;',
                txt:'想法'
            },{
                id:'004',
                to:'/Mine/',
                icon:'&#xe62f;',
                txt:'我的'
            }
            ]
        }
    },
      
}

</script>
<style lang="stylus" scoped>
    .bottom-bar
        position fixed  
        bottom 0
        padding-top .2rem
        width 100%
        height 1rem
        text-align center
        background #fff
        .bar-item
            display inline-block
            height 1rem
            width 25vw
            .icon
                font-size .5rem
            .item-text
                width 100%
                padding-top .2rem
                font-size .2rem   
        .router-link-exact-active
            color #0099CC

                    


</style>