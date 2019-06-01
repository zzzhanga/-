<!--  -->
<template>
  <transition name="slide">
    <div class="detail">
      <header class="header">
        <span class="cubeic-back" slot="left" @click="back"></span>
        <span class="cubeic-person" slot="right"></span>
      </header>
      <div class="wrapper">
        <cube-scroll ref="scroll">
          <detail-wonderful :detailList.sync="detailList" :detailItem.sync="detailItem"></detail-wonderful>
        </cube-scroll>
      </div>
      <detail-bar :songs.sync="songs"></detail-bar>
    </div>
  </transition>
</template>

<script>
import DetailWonderful from './components/wonderful'
import DetailBar from './components/detailbar'
import {FindMixin} from '../../../assets/js/axios'
export default {
  name: 'Detail',
  mixins: [FindMixin],
  data () {
    return {
      detailList: {},
      detailItem: [],
      songs: [],
      visible: true
    }
  },
  components: {
    DetailWonderful,
    DetailBar
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  mounted () {
    this.getFindInfo()
  }
}
</script>
<style lang='stylus' scoped>
.slide-enter-active,.slide-leave-active
  transition all .3s

.slide-enter,.slide-leave-to
  transform translate3d(100%,0,0)

.detail
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  background #fff

.header
  line-height 1rem
  display flex
  justify-content space-between
  font-size 0.4rem
  color #666
  .cubeic-back
    margin-left 0.2rem
  .cubeic-person
    margin-right 0.4rem
    &:after
      position absolute
      top -0.1rem
      content '19'
      font-size 0.08rem
.wrapper
    position absolute
    top 1rem
    left 0
    right 0
    bottom 0
    overflow hidden
</style>
