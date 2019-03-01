<template>
  <div class="head">
      <div class="header">书架</div>
      <book-search></book-search>
      <book-content></book-content>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from '../../components/Bar'
import BookSearch from './components/BookSearch'
import BookContent from './components/BookContent'
export default {
    name: "bookshelf",
    components:{
      BottomBar,
      BookSearch,
      BookContent
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

</style>