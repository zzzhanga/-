<!--  -->
<template>
  <div>
      <div class="wrapper" ref="wrapper">
        <div>
            <textarea cols="49" rows="40" placeholder="写下这一刻的想法..." maxlength=2000 style="overflow-y:hidden;" onpropertychange="this.style.height=this.scrollHeight + 'px'" oninput="this.style.height=this.scrollHeight + 'px'"></textarea>
        </div>
      </div>
        <footer class="footer border-top">
              <router-link to="idea" tag="div" class="back"><span class="iconfont">&#xe640;</span></router-link>
              <div class="menu">
                <span class="iconfont">&#xe794;</span>
                <span class="iconfont">&#xe635;</span>
                <span class="iconfont">&#xe65f;</span>
                <span class="iconfont">&#xe600;</span>
              </div>
              <div class="submit">
                <span class="iconfont">&#xe6ad;</span>
              </div>
        </footer>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
    };
  },
  mounted() {
  this.scroll=new Bscroll(this.$refs.wrapper)
  },

}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .wrapper
      position absolute
      top 0
      left .2rem
      right 0
      bottom 0
      overflow hidden
    .footer
      position fixed
      bottom 0
      display flex
      justify-content space-between
      align-items center
      width 100%
      height 1rem
      background #fff
      .back
        flex 1
        span 
          margin-left .2rem
          font-size .4rem
      .menu
        flex 5
        display flex
        justify-content center
        span 
          font-size .4rem
          padding 0 .2rem
      .submit
        flex 1
        span
          font-size .4rem
          color $Color
</style>