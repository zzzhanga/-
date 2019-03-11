<template>
    <div class="bottom-bar">
        <router-link  to="/" class="bar-item" >
            <i class="iconfont" >&#xe663;</i>
            <span class="item-text">发现</span>
        </router-link>
        <router-link  to="/book" class="bar-item" >
            <i class="iconfont" >&#xe60a;</i>
            <span class="item-text">书架</span>
        </router-link>
        <router-link  to="/idea" class="bar-item" >
            <i class="iconfont" >&#xe64c;</i>
            <span class="item-text">想法</span>
        </router-link>
        <router-link  to="/mine" class="bar-item" >
            <i class="iconfont" >&#xe62f;</i>
            <span class="item-text">我</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'BottomBar',
    data() {
        return {
            index:0,
        }    
    },
}

</script>
<style lang="stylus" scoped>
    @import "~styles/varibles";
    .bottom-bar 
        position fixed
        bottom 0
        width 100%
        background #fff
        display flex
        height 1rem
        text-align center
        color #000
        .router-link-exact-active
            color $Color
        .bar-item
            flex 1
            display flex
            justify-content: center;
            flex-direction: column
            align-items: center;
            .iconfont
                font-size .5rem
                margin-bottom .1rem
            .item-text
                font-size .22rem
</style>