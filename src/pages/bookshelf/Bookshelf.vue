<template>
  <div class="head">
      <header id="header">书架</header>
      <div class="wrapper scroll-list-wrap">
        <cube-scroll ref="scroll">
          <search>
                  <router-link to="/like" class="iconfont search" slot="left">&#xe634;</router-link>
                  <router-link to="/like"  class="icon-center" slot="center">三体</router-link>
          </search>
          <book-content :booklist="booklist"></book-content>
        </cube-scroll>
      </div>
      <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./../../components/TabBar";
import Search from "./../../components/Search";
import BookContent from './components/BookContent';
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
      Search,
      BookContent,
      TabBar
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