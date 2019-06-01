<template>
  <div class="head">
    <header id="header">书架</header>
    <div class="wrapper scroll-list-wrap">
      <cube-scroll ref="scroll">
        <search @click.native="goLike">
          <span class="iconfont search" slot="left">&#xe634;</span>
          <span class="icon-center" slot="center">三体</span>
        </search>
        <book-content :booklist="booklist"></book-content>
      </cube-scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './../../components/Search'
import BookContent from './components/BookContent'
import {BookMixin} from '../../assets/js/axios'
export default {
  name: 'bookshelf',
  mixins: [BookMixin],
  data () {
    return {
      booklist: [],
      visible: true
    }
  },
  components: {
    Search,
    BookContent
  },
  mounted () {
    this.getBookInfo()
  },
  methods: {
    goLike () {
      this.$router.push('/find/like')
    }
  }
}
</script>
<style lang="stylus" scoped>
.header >>> .mine-navbar
  margin: 0 0.2rem
  height: 0.6rem
  border: 1px solid #ccc
  border-radius: 0.8rem
.header >>> .mine-navbar-center
  float: left
#header
  position: absolute
  z-index: 1
  top: 0
  background: #fff
  width: 100%
  line-height: 8vh
  text-align: center
  font-size: 0.32rem
.wrapper
  position: absolute
  top: 8vh
  left: 0
  right: 0
  bottom: 0
  overflow: hidden

</style>
