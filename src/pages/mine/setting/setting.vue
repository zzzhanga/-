<template>
  <div class="setting">
    <div class="header border-bottom-1px">
      <i class="cubeic-back" @click="goBack"></i>
      <p class="header-title">设置</p>
    </div>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="item">
          <span>阅读时不自动锁屏</span>
          <cube-switch v-model="lockScreen"></cube-switch>
        </div>
        <div class="item">
          <span>阅读时横屏</span>
          <cube-switch v-model="landScape"></cube-switch>
        </div>
        <div class="item">
          <span>翻页方式</span>
          <cube-select class="flipWay" v-model="flipWay" :options="options"></cube-select>
        </div>
        <div class="item">
          <span>阅读时隐藏热门讨论</span>
          <cube-switch v-model="hideDiscuss"></cube-switch>
        </div>
        <div class="item">
          <span>使用音量键翻页</span>
          <cube-switch v-model="volumeButton"></cube-switch>
        </div>
        <div class="item">
          <span>首行缩进</span>
          <cube-switch v-model="attention"></cube-switch>
        </div>
        <div class="hr"></div>
        <div class="item">
          <div class="item-flex">
            <p class="title">关注你需得到你的同意</p>
            <p>开启后,需获得你同意的用户才可以关注你,且你的书架和阅读动态仅对关注你的人可见</p>
          </div>
          <cube-switch v-model="retract"></cube-switch>
        </div>
        <div class="item">
          <span>不接受未关注人的私信</span>
          <cube-switch v-model="noAcceptable"></cube-switch>
        </div>
        <div class="hr"></div>
        <div class="item">
          <span>接受推送通知</span>
          <cube-switch v-model="pushService"></cube-switch>
        </div>
        <div class="item">
          <div class="item-flex">
            <p class="title">接收新关注提醒</p>
            <p>关闭后,其他用户关注你时,"我的关注"将不再出现红点</p>
          </div>
          <cube-switch v-model="newAttention"></cube-switch>
        </div>
        <div class="item">
          <div class="item-flex">
            <p class="title">限时免费更新提醒</p>
            <p>开启后,将收到书城限时免费栏目更新通知</p>
          </div>
          <cube-switch v-model="freeUpdates"></cube-switch>
        </div>
        <div class="hr"></div>
        <p class="item">清理缓存</p>
        <div class="hr"></div>
        <p class="item">关于微信读书</p>
        <p class="item">关于微信公众号</p>
        <p class="item">帮助与反馈</p>
        <div class="hr1"></div>
        <cube-button class="log-out" @click="showAlert">退出登录</cube-button>
        <div class="hr"></div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lockScreen: true,
      landScape: false,
      hideDiscuss: false,
      volumeButton: true,
      retract: true,
      attention: false,
      noAcceptable: false,
      pushService: false,
      newAttention: false,
      freeUpdates: false,
      options: ['左右滑动', '上下滑动'],
      flipWay: '左右滑动'
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    showAlert () {
      this.$createDialog({
        type: 'confirm',
        title: '退出登录',
        content: '退出后不会删除历史数据,下次登陆依然可以使用本账号',
        icon: '',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$createToast({
            type: 'loading',
            time: 1500,
            txt: '正在退出账号...'
          }).show()
        }
      }).show()
    }
  }
}
</script>

<style lang='stylus' scoped>
.setting
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  background #fff
.header
  display: flex
  line-height: 1rem
  .cubeic-back
    margin-left: 0.2rem
    font-size: 0.32rem
    flex: 1
  &-title
    flex: 8
    text-align: center
    margin-right: 0.2rem
.scroll-wrapper
  height: 92vh

.hr, .hr1
  background: #ccc
  height: 0.1rem
  width: 100%

.hr1
  height: 0.2rem

.log-out
  width: 100%
  display: felx
  justify-content: center
  align-items: center
  background: #fff
  color: #FF0033

.item
  display: flex
  justify-content: space-between
  align-items: center
  height: 1.5rem
  margin: 0 0.2rem

  .flipWay
    margin-top: 0.2rem
    margin-bottom: 0.2rem
    height: 0.8rem
  .item-flex
    display: flex
    flex-direction: column
    justify-content: space-around
    color: #666
    font-size: 0.2rem
    line-height: 0.24rem
    .title
      font-size: 0.28rem
      color: #333
      margin-bottom: 0.2rem
</style>
