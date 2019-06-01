<!--  -->
<template>
  <div>
    <footer class="footer border-top-1px">
      <span @click="selectItem">{{listening}}</span>
      <span @click="go">{{free}}</span>
      <span @click="gobook">{{join}}</span>
    </footer>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'DetailBar',
  props: {
    songs: Array
  },
  data () {
    return {
      listening: '听书',
      free: '免费阅读',
      join: '加入书架',
      index: 0
    }
  },
  methods: {
    go () {
      this.$router.replace({
        path: `/book/0001`
      })
      this.playing(false)
    },
    gobook () {
      this.$router.replace({
        path: `/book`
      })
    },
    selectItem (songs, index) {
      this.selectPlay({
        list: this.songs,
        index: this.index
      })
    },
    ...mapActions([
      'selectPlay'
    ]),
    ...mapMutations({
      playing: 'SET_PLAYING_STATE'
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.footer
  position: fixed
  bottom: 0
  z-index: 2
  display: flex
  justify-content: space-between
  width: 100%
  line-height: .8rem
  background: #fff
  a, span
    flex: 1
    display: inline-block
    text-align: center
    color: $theme-color
</style>
