<!--  -->
<template>
  <div>
    <footer class="footer border-top-1px">
      <span @click="selectItem">{{listening}}</span>
      <router-link to="/bookdetail/0001">{{free}}</router-link>
      <router-link to="/book">{{join}}</router-link>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    selectItem (songs, index) {
      this.selectPlay({
        list: this.songs,
        index: this.index
      })
    },
    ...mapActions([
      'selectPlay'
    ])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl';
.footer
  position: fixed
  bottom: 0
  z-index: 1
  display: flex
  justify-content: space-between
  width: 100%
  line-height: .8rem
  background: #fff
  a, span
    flex: 1
    display: inline-block
    text-align: center
    color: $Color
</style>
