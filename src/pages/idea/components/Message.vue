<template>
  <div class="message scroll-list-wrap">
    <cube-scroll ref="scroll" :data="message" :options="options" @pulling-down="onPullingDown">
      <div class="message-item animated fadeIn" v-for="item of message" :key="item.id">
        <span class="message-title">{{item.txt}}</span>
        <img class="message-img" :src="item.imgUrl" alt>
      </div>
      <p class="message-updata border-bottom" @click="onPullingDown">下拉刷新哦</p>
    </cube-scroll>
  </div>
</template>

<script>
import {IdeaMixin} from '../../../assets/js/axios'

export default {
  name: 'Message',
  mixins: [IdeaMixin],
  data () {
    return {
      message: [],
      options: {
        pullDownRefresh: {
          threshold: 30,
          stopTime: 600,
          txt: '更新成功'
        }
      }
    }
  },
  methods: {
    onPullingDown () {
      setTimeout(() => {
        this.getIdeaInfo()
      }, 200)
    }
  },
  mounted () {
    this.getIdeaInfo()
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'

.message
  .message-item
    width: 100%
    height: 2rem
    display: flex
    margin-top: 0.2rem
    .message-title
      flex: 1
      font-size: 0.24rem
      line-height: 0.4rem
      margin: 0.4rem 0.6rem 0.2rem 0.2rem
    .message-img
      width: 2rem
      padding: 0.2rem
  .message-updata
    line-height: 0.8rem
    font-size: 0.2rem
    text-align: center
    color: $theme-color
</style>
