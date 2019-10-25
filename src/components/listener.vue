<!--  -->
<template>
  <div class="player" v-if="playlist.length>0">
    <transition
    name="normal"
    appear
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
    appear-active-class="normal-leave-to normal-enter-active"
    >
      <div class="normal-player" @click="close" v-show="fullScreen">
        <div class="head">
          <i class="cubeic-back" @click="back"></i>
          <i class="iconfont" @click.stop="rate">&#xe632;</i>
        </div>
        <div class="scroll-list-wrap">
          <cube-scroll :options="options">
            <div class="background">
              <div class="listener" ref="outerNode">
                <nav class="listener-info">
                  <div class="book-name" ref="bookCover">
                    <img :src="currentSong.pic" alt="给予者">
                  </div>
                  <div class="listener-title">{{currentSong.title}}</div>
                  <div class="linenode">
                    <div class="progressnode" @click.prevent="drag" ref="progress">
                      <div class="trueLine" ref="line"></div>
                      <span class="circle" :style="styObj"></span>
                    </div>
                    <div class="duration">
                      <span class="start">{{cTime}}</span>
                      <span class="end">{{dTime}}</span>
                    </div>
                  </div>
                  <div class="menu">
                    <span class="iconfont icongouwuche"></span>
                    <span class="iconfont icondiyiyeshouyeshangyishou" @click="prev"></span>
                    <span class="iconfont" @click="togglePlaying" :class="playIcon"></span>
                    <span class="iconfont iconzuihouyiyemoyexiayishou" @click="next"></span>
                    <span class="iconfont icondingshi" @click.stop="timing"></span>
                  </div>
                </nav>
              </div>
            </div>
            <div class="avator-info">
              <div class="avator">
                <img :src="currentSong.autorurl">
                <span>{{currentSong.autor}}</span>
              </div>
              <div class="attention">
                <cube-button @click="attention">{{atten}}</cube-button>
              </div>
            </div>
            <div class="publish">
              <span class="publish-time">{{currentSong.publishtime}}</span>
              <span class="listen-in">{{currentSong.listenin}}</span>
            </div>
            <div class="discuss" v-if="currentSong.items">
              <h5 class="book-review">书评</h5>
              <ul>
                <li class="discuss-item border-top" v-for="item of currentSong.items" :key="item.id">
                  <div class="portrait">
                    <img :src="item.portrait" alt="刘俊峰">
                  </div>
                  <div class="discuss-infobox">
                    <p class="discuss-info">
                      <span class="discuss-name">{{item.discussname}}</span>
                      <span class="submit-time">{{item.submittime}}</span>
                    </p>
                    <p class="speak">{{item.speak}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </cube-scroll>
        </div>
      </div>
    </transition>
    <div v-show="show" class="timer" @click.stop>
      <i class="cubeic-select timer-down" @click="close"></i>
      <span class="timer-title">定时关闭</span>
      <ul>
        <li>听完当前章节</li>
        <li @click.stop="fifteen">2秒钟后</li>
        <li>30分钟后</li>
        <li>60分钟后</li>
      </ul>
    </div>
    <div v-show="ratestatu" class="rate-setting" @click.stop>
      <i class="cubeic-select rate-setting-down" @click="close"></i>
      <span class="rate-setting-title">语速设置</span>
      <ul>
        <li @click="one">1x</li>
        <li @click="two">1.25x</li>
        <li @click="three">1.5x</li>
        <li @click="four">2x</li>
      </ul>
    </div>
    <transition name="mini">
      <div class="mini-player"  v-show="trigger" @click="open">
        <div class="icon" >
          <img :class="cdCls" width="40" height="40" :src="currentSong.pic">
        </div>
      </div>
    </transition>
    <audio :src="currentSong.url" ref="voice" @timeupdate="mission" preload="auto" @canplay="canplay"></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import animations from 'create-keyframe-animation'
import {prefixStyle} from '../common/js/dom'

const transform = prefixStyle('transform')

export default {
  name: 'Listener',
  data () {
    return {
      styObj: {
        left: '0'
      },
      show: false,
      ratestatu: false,
      cTime: '00:00',
      dTime: '00:00',
      atten: '关注'
    }
  },
  computed: {
    trigger () {
      return (!this.fullScreen && this.playing)
    },
    cdCls () {
      return this.playing ? 'play' : 'play pause'
    },
    playIcon () {
      return this.playing ? 'iconzanting' : 'iconicon-bofang'
    },
    ...mapGetters([
      'fullScreen',
      'playlist',
      'currentIndex',
      'currentSong',
      'playing'
    ]),
    options () {
      return {
        bounce: {
          top: false,
          bottom: true,
          left: true,
          right: true
        }
      }
    }
  },
  methods: {
    // 返回按钮
    back () {
      this.setFullScreen(false)
    },
    // 点击mini播放打开全屏
    open () {
      this.setFullScreen(true)
    },
    // 动画
    enter (el, done) {
      const {x, y, scale} = this._getPosAndScale()
      let animation = {
        0: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      }
      animations.registerAnimation({
        name: 'move',
        animation,
        presets: {
          duration: 400,
          easing: 'linear'
        }
      })

      animations.runAnimation(this.$refs.bookCover, 'move', done)
    },
    afterEnter (el, done) {
      animations.unregisterAnimation('move')
      this.$refs.bookCover.style.animation = ''
    },
    leave (el, done) {
      this.$refs.bookCover.style.transition = 'all 0.4s'
      const {x, y, scale} = this._getPosAndScale()
      this.$refs.bookCover.style[transform] = `translate3d(${x}px,${y}px,0) scale(${scale})`
      this.$refs.bookCover.addEventListener('transitionend', done)
    },
    afterLeave (el, done) {
      this.$refs.bookCover.style.transition = ''
      this.$refs.bookCover.style[transform] = ''
    },
    _getPosAndScale () {
      const targetWidht = 40
      const paddingLeft = 40
      const paddingBottom = 80
      const paddingTop = 70
      const width = window.innerWidth - 40 * 0.22
      const scale = targetWidht / width
      const x = -(window.innerWidth / 2 - paddingLeft)
      const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
      return {
        x,
        y,
        scale
      }
    },
    // 关注按钮
    attention () {
      if (this.atten === '已关注') {
        this.$createDialog({
          type: 'confirm',
          icon: '',
          content: '取消关注后将不再收到该用户的动态信息',
          confirmBtn: {
            text: '取消关注',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '关闭',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.atten = '关注'
            this.$createToast({
              type: 'correct',
              time: 1000,
              txt: '已取消关注'
            }).show()
          }
        }).show()
      } else {
        this.atten = '已关注'
      }
    },
    // 开始暂停
    togglePlaying () {
      this.setPlayingState(!this.playing)
    },
    // 上一首
    prev () {
      let index = this.currentIndex - 1
      if (index < 0) {
        return
      }
      this.setCurrentIndex(index)
      this.setPlayingState(true)
    },
    // 下一首
    next () {
      let index = this.currentIndex + 1
      if (index > (this.playlist.length - 1)) {
        return
      }
      this.setCurrentIndex(index)
      this.setPlayingState(true)
    },
    canplay () {
    },
    // 已听时间 和 剩余时间
    mission: function (e) {
      this.currentTime = this.$refs.voice.currentTime
      this.duration = this.$refs.voice.duration
      // 计算进度条长度
      this.$refs.line.style.width = (this.currentTime / this.duration) * 100 + '%'
      // 计算已读进度
      this.styObj.left = (this.currentTime / this.duration) * 100 + '%'
      // 计算已读时间
      let s = String(Math.floor(this.currentTime) % 60).padStart(2, 0)
      let m = String(Math.floor((this.currentTime % 3600) / 60)).padStart(2, 0)
      this.cTime = m + ':' + s
      // 计算剩余时间
      let se = String(Math.floor(this.duration - this.currentTime) % 60).padStart(2, 0)
      let me = String(Math.floor((this.duration % 3600) / 60 - (this.currentTime % 3600) / 60)).padStart(2, 0)
      if (isNaN(me)) {
        this.dTime = '00:00'
      } else {
        this.dTime = me + ':' + se
      }
      // 播放完毕暂停
      if (this.styObj.left === '100%') {
        this.setPlayingState(false)
        let index = this.currentIndex + 1
        this.setCurrentIndex(index)
      }
    },
    // 点击读条到相应位置
    drag: function (ev) {
      // 当前已听时间=总时长* (读条真实点击的位置  |就是"读条点的距离-读条距页面的距离"|) / 读条总长度
      this.$refs.voice.currentTime = (this.$refs.voice.duration * (ev.clientX - (this.$refs.line.offsetLeft + this.$refs.outerNode.offsetLeft))) / this.$refs.progress.offsetWidth
      // 读条已读百分比   读条点击位置/读条总长度
      this.$refs.line.style.width = ((ev.clientX - (this.$refs.line.offsetLeft + this.$refs.outerNode.offsetLeft)) / this.$refs.progress.offsetWidth) * 100 + '%'
    },
    // 速率
    rate: function () {
      this.ratestatu = !this.ratestatu
    },
    close: function () {
      this.ratestatu = false
      this.show = false
    },
    one: function () {
      this.$refs.voice.playbackRate = 1
    },
    two: function () {
      this.$refs.voice.playbackRate = 1.25
    },
    three: function () {
      this.$refs.voice.playbackRate = 1.5
    },
    four: function () {
      this.$refs.voice.playbackRate = 2
    },

    // 定时
    timing: function () {
      this.show = !this.show
    },
    // 定时关闭
    fifteen: function () {
      setTimeout(() => {
        this.setPlayingState(false)
      }, 2000)
    },
    // 修改状态
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX'
    })
  },
  watch: {
    // 检测播放暂停
    currentSong () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$refs.voice.play()
      }, 1000)
    },
    playing (newPlaying) {
      this.$nextTick(() => {
        newPlaying ? this.$refs.voice.play() : this.$refs.voice.pause()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.attention >>> .cube-btn
  background #dcdcdc
  color #666
.background
  background #f0f0f0
  padding .4rem
.player
  .normal-player
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 2
    background #fff
    .head
        font-size .34rem
        display flex
        justify-content space-between
        line-height 8vh
        padding 0 .2rem
        background #F0F0F0
    .scroll-list-wrap
      height 92vh
    .avator-info
        padding 0 .4rem
        margin-top .4rem
        line-height .8rem
        display flex
        justify-content space-between
        .avator
            position relative
            width 2rem
            height 1rem
            img
                width 1rem
                height 1rem
                border-radius 50%
            span
                position absolute
                right 0
                font-size .24rem
    .listener
        text-align center
        line-height 1.5rem
        color #999
        .listener-title
            font-size .24rem
            color #333
        .book-name
            display flex
            justify-content center
            img
              width 22%
              height 2rem
        .menu
            display flex
            justify-content space-around
            .iconfont
                font-size .5rem
                flex 1
        .linenode
            width: 100%;
            height: 1rem;
            .progressnode
                width 100%
                height .05rem
                float left
                background: #dfdfdf
                position: relative;
                .trueLine
                    position: absolute
                    top: 0.01rem;
                    height: .05rem;
                    width: 0%;
                    background: #c0c0c0
                    border-radius: 6px
                .circle
                    position absolute
                    top -.06rem
                    display inline-block
                    width .2rem
                    height .2rem
                    border-radius 50%
                    background #fff
            .duration
                height .2rem
                line-height .6rem
                display flex
                width 100%
                justify-content space-between
                font-size .24rem
    .publish
        font-size .24rem
        display flex
        justify-content space-between
        margin .4rem .5rem 0 .4rem
        color #ccc
    .discuss
        margin .8rem 0
        padding-bottom 1rem
        .book-review
          text-indent 1em
        .discuss-item
            position relative
            display flex
            justify-content space-between
            padding 0 .2rem
            margin-top .4rem
            margin-bottom .4rem
            .portrait
                flex 1
                width .5rem
                height .5rem
                img
                    width 100%
                    height 100%
                    border-radius 50%
            .discuss-infobox
                flex 12
                display flex
                flex-direction column
                justify-content space-between
                font-size .24rem
                .discuss-info
                    flex 1
                    color #999
                    display flex
                    justify-content space-between
                    padding .2rem
                .speak
                    flex 2
    &.normal-enter-active, &.normal-leave-active
        transition: all .4s
        .head,
        .background,
        .avator-info,
        .publish,
        .discuss
          transition: all .4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
      &.normal-enter, &.normal-leave-to
        opacity: 0
        .head,
        .background,
        .avator-info,
        .publish,
        .discuss
          transform: translate3d(-5rem, 5rem, 0)
  .mini-player
    display: flex
    align-items: center
    position: fixed
    left 20px
    bottom 1.5rem
    z-index: 2
    width: 40px
    &.mini-enter-active, &.mini-leave-active
      transition: all 0.6s
    &.mini-enter, &.mini-leave-to
      opacity: 0
    .icon
      flex: 0 0 40px
      width: 40px
      img
        border-radius: 50%
        &.play
          animation: rotate 10s linear infinite
        &.pause
          animation-play-state: paused
@keyframes rotate
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)

.timer
    position absolute
    bottom 0
    width 100%
    z-index 3
    background #ffffff
    line-height 1rem
    text-align center
    .timer-down
      float left
      margin-left .6rem
    .timer-title
      margin-right .6rem
.rate-setting
    position fixed
    left 0
    bottom 0
    width 100%
    z-index 3
    background #ffffff
    line-height 1rem
    text-align center
    background #fff
    .rate-setting-down
      float left
      margin-left .6rem
    .rate-setting-title
      margin-right .6rem
</style>
