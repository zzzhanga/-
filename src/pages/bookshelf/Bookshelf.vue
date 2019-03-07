<template>
  <div class="head">
      <div class="header">书架</div>
      <div class="wrapper" ref="wrapper">
        <div>
          <book-search></book-search>
          <book-content></book-content>
        </div>
      </div>

      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Bescroll from 'better-scroll'
import BottomBar from '../../components/Bar'
import BookSearch from './components/BookSearch'
import BookContent from './components/BookContent'
export default {
    name: "bookshelf",
    components:{
      BottomBar,
      BookSearch,
      BookContent
    },
    mounted () {
      this.scroll=new Bescroll(this.$refs.wrapper)
    }
}

</script>
<style lang="stylus" scoped>
    .header
      position fixed
      z-index 2
      top 0
      background #fff
      width 100%
      height 1rem
      line-height 1rem
      text-align center
    .wrapper
      position absolute
      top 1rem
      left 0
      right 0
      bottom 0
      overflow hidden

</style>