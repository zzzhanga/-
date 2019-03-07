<!--  -->
<template>
    <div>
      <like-search></like-search>
      <div class="like" ref="wrapper">
          <div>
              <like-guess></like-guess>
              <like-history></like-history>
          </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import LikeSearch from './components/LikeSearch'
import LikeGuess from './components/guess'
import LikeHistory from './components/history'
export default {
  components: {
      LikeSearch,
      LikeGuess,
      LikeHistory
  },
  data () {
    return {
    }
  },
  mounted() {
      this.scroll=new Bscroll(this.$refs.wrapper)
  },

}

</script>
<style lang='stylus' scoped>
    .like
      position absolute
      top 1.8rem
      left 0
      right 0
      bottom 0
      overflow hidden
</style>