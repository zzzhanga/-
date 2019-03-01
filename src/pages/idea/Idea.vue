<template>
  <div class="idea">
      <header class="head">想法  <span class="iconfont icon">&#xe7b9;</span></header>
      <message></message>
      <discuss></discuss>   
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from '../../components/Bar'
import Message from './components/Message'
import Discuss from './components/Discuss'
export default {
    name: "bookshelf",
    components: {
        Message,
        Discuss,
        BottomBar 
    }
}

</script>
<style lang="stylus" scoped>
    .head
        position fixed
        z-index 2
        top 0
        background #fff
        width 100%
        height 1rem
        line-height 1rem
        text-align center
        .icon
            margin-right .2rem
            font-size .4rem
            float right 



</style>