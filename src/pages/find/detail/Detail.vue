<!--  -->
<template>
  <div class="detail">
    <header class="header">
      <span class="cubeic-back" slot="left" @click="goBack"></span>
      <span class="cubeic-person" slot="right"></span>
    </header>
    <div class="wrapper">
      <cube-scroll ref="scroll">
        <detail-wonderful :detailList.sync="detailList" :detailItem.sync="detailItem"></detail-wonderful>
      </cube-scroll>
    </div>
    <detail-bar :songs.sync="songs"></detail-bar>
  </div>
</template>

<script>
import DetailWonderful from './components/wonderful'
import DetailBar from './components/detailbar'
import axios from 'axios'
export default {
  name: 'Detail',
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
    goBack () {
      this.$router.push('/')
    },
    getFindInfo () {
      axios.get('/static/mock/find.json').then(this.getFindInfoSucc)
    },
    getFindInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.detailList = data.detailList
        this.detailItem = data.detailItem
        this.songs = data.listenerItem
      }
    }
  },
  mounted () {
    this.getFindInfo()
  }
}
</script>
<style lang='stylus' scoped>
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
