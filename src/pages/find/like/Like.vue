<!--  -->
<template>
  <transition name="slide">
    <div class="like">
      <like-search class="search"></like-search>
      <div class="scroll">
        <cube-scroll ref="scroll">
          <like-guess></like-guess>
          <like-history></like-history>
        </cube-scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import LikeSearch from './components/LikeSearch'
import LikeGuess from './components/guess'
import LikeHistory from './components/history'

export default {
  components: {
    LikeSearch,
    LikeGuess,
    LikeHistory
  }
}
</script>
<style lang='stylus' scoped>
.slide-enter-active,.slide-leave-active
  transition all .3s

.slide-enter,.slide-leave-to
  transform translate3d(-100%,0,0)

.like
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  background #fff
.search
  position: fixed
  top: 0
  z-index: 1
  width: 100%
.scroll
  position: absolute
  top: 1.5rem
  left: 0
  right: 0
  bottom: 0
  z-index 0
  overflow: hidden
</style>
