<!--  -->
<template>
    <div>
      <header class="header">
          <router-link tag="span" to="/" class="iconfont back">&#xe624;</router-link>
          <span class="iconfont people">&#xe62f;</span>
      </header>
        <div class="wrapper" ref="wrapper">
            <div>
                <detail-wonderful></detail-wonderful>
                <detail-bar></detail-bar>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import DetailWonderful from './components/wonderful'
import DetailBar from './components/detailbar'
export default {
    name:'Detail',
    data () {
        return {
        };
    },
    components: {
        DetailWonderful,
        DetailBar

    },
    mounted() {
        this.scroll=new Bscroll(this.$refs.wrapper)
    },
}
</script>
<style lang='stylus' scoped>
    .header
        position fixed
        top 0
        z-index 2
        height 1rem
        line-height 1rem
        padding .1rem .2rem
        background #fff
        width 100%
        .back
            font-size .5rem
            float left
        .people
            float right
            position relative
            right .6rem
            font-size .5rem
            &:after
                position absolute
                top -0.1rem
                content "19"
                font-size .08rem
                display inline
    .wrapper
        position absolute
        top 1rem
        left 0
        right 0
        bottom 0
        overflow hidden

</style>