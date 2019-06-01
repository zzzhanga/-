<template>
  <div class="idea">
    <header class="head">
      想法
      <span class="iconfont icon iconxie" @click="goTo"></span>
    </header>
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll" :data="speak" @pulling-up="onPullingUp" :options="options">
        <message class="message"></message>
        <discuss :speak="speak"></discuss>
      </cube-scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Message from './components/Message'
import Discuss from './components/Discuss'
import {IdeaMixin} from '../../assets/js/axios'

let i = 0

export default {
  name: 'idea',
  mixins: [IdeaMixin],
  data () {
    return {
      speak: [],
      items: [],
      options: {
        pullUpLoad: true
      }
    }
  },
  components: {
    Message,
    Discuss
  },
  methods: {
    onPullingUp () {
      setTimeout(() => {
        if (i >= 14) {
          i = 0
        }
        this.speak = this.speak.concat(this.items.slice(i, i + 5))
        i = i + 5
      }, 20)
    },
    goTo () {
      this.$router.push('/idea/ideawrite')
    }
  },
  mounted () {
    this.getIdeaInfo()
  }
}
</script>
<style lang="stylus" scoped>
.scroll-list-wrap
  height: 90vh
.head
  position: relative
  z-index: 1
  top: 0
  background: #fff
  width: 100%
  line-height: 1rem
  text-align: center
  overflow: hidden
  .icon
    margin-right: 0.2rem
    font-size: 0.4rem
    float: right
.message
  height: 8rem

</style>
