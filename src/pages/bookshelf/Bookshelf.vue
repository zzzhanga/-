<template>
  <div class="head">
      <header id="header">书架</header>
      <div class="wrapper" ref="wrapper">
        <div>
          <search-bar>
                  <router-link to="/like" class="iconfont search" slot="left">&#xe634;</router-link>
                  <router-link to="/like"  class="icon-center" slot="center">三体</router-link>
          </search-bar>
          <book-content :booklist="booklist"></book-content>
        </div>
      </div>

      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Bescroll from 'better-scroll'
import SearchBar from "./../../components/SearchBar";
import BottomBar from '../../components/Bar'
import BookContent from './components/BookContent'
import axios from 'axios'
export default {
    name: "bookshelf",
    data () {
      return {
        booklist:[],
        visible: true
      }
    },
    components:{
      BottomBar,
      BookContent,
      SearchBar
    },
    methods: {
      getFindInfo(){
        axios.get('/static/mock/book.json')
          .then(this.getFindInfoSucc)
      },
      getFindInfoSucc(res){
        res=res.data
        if(res.ret && res.data){
          const data=res.data
          this.booklist=data.booklist
        }
      }
    },
    mounted () {
      this.getFindInfo()
      this.scroll=new Bescroll(this.$refs.wrapper)
    }
}

</script>
<style lang="stylus" scoped>
  .header >>> .mine-navbar
     margin 0 .2rem
     height .6rem
     border 1px solid #ccc
     border-radius .8rem
  .header >>> .mine-navbar-center
    float left
  #header
    position absolute
    z-index 2
    top 0
    background #fff
    width 100%
    height .6rem
    line-height .6rem
    text-align center
    font-size .32rem
  .wrapper
    position absolute
    top 1rem
    left 0
    right 0
    bottom 0
    overflow hidden

</style>