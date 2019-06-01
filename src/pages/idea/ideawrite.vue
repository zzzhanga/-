<!--  -->
<template>
  <transition name="slide">
    <div class="ideawrite">
      <div class="wrapper">
        <textarea cols="49" rows="40" placeholder="写下这一刻的想法..." maxlength="140" v-model="write"></textarea>
      </div>
      <footer class="footer border-top-1px">
        <div class="back" @click="goBack">
          <i class="cubeic-close"></i>
        </div>
        <div class="menu">
          <span class="iconfont iconbaocun"></span>
          <span class="iconfont iconxiaolian" ></span>
          <span class="iconfont iconshudian_caijishuju"></span>
          <span class="iconfont iconT"></span>
        </div>
        <div class="submit">
          <span class="iconfont iconsend"></span>
        </div>
      </footer>
    </div>
    </transition>
</template>

<script>
export default {
  data () {
    return {
      write: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.slide-enter-active,.slide-leave-active
  transition all .3s

.slide-enter,.slide-leave-to
  transform translate3d(100%,0,0)
.ideawrite
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  background #fff
.wrapper
  position: absolute
  top: 0
  left: 0.2rem
  right: 0
  bottom: 0
  height: 90vh
  overflow: hidden
.footer
  position: absolute
  bottom: 0
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  height: 10vh
  background: #fff
  .back
    flex: 1
    i
      margin-left: 0.2rem
      font-size: 0.4rem
  .menu
    flex: 5
    display: flex
    justify-content: center
    span
      font-size: 0.4rem
      padding: 0 0.2rem
  .submit
    flex: 1
    span
      font-size: 0.4rem
      color: $theme-color
</style>
