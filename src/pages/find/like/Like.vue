<!--  -->
<template>
  <div>
    <like-search class="like-search"></like-search>
    <div class="like">
      <cube-scroll ref="scroll">
        <like-guess></like-guess>
        <like-history></like-history>
      </cube-scroll>
    </div>
  </div>
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
.like-search {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

.like {
  position: absolute;
  top: 1.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index 0
  overflow: hidden;
}
</style>
