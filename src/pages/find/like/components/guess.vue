<!--  -->
<template>
  <div class="border-bottom-1px">
    <header class="header">
      <span>{{guess}}</span>
      <span @click="change">{{updata}}</span>
    </header>
    <cube-swipe v-if="Items.length">
      <ul class="container">
        <li class="swipe-item-wrapper" tag="li" v-for="(item,index) in Items" :key="item.id">
          <cube-swipe-item
            ref="swipeItem"
            :btns="item.btns"
            :index="index"
            @btn-click="onBtnClick"
            :autoShrink="autoShrink"
          >
            <router-link to="./detail" tag="div" class="detail-item swipe-item-wrapper">
              <img class="animated fadeIn" :src="item.item.imgUrl">
            </router-link>
            <div class="text"></div>
          </cube-swipe-item>
        </li>
      </ul>
    </cube-swipe>
  </div>
</template>

<script>
import {FindMixin} from '../../../../assets/js/axios'
export default {
  name: 'LikeGuess',
  mixins: [FindMixin],
  data () {
    return {
      guess: '猜你喜欢',
      updata: '换一批',
      guessItem: [],
      Items: [],
      autoShrink: true
    }
  },
  computed: {
    // 获取随机数
    changed: function () {
      if (this.guessItem.length) {
        const r = Array.apply(null, { length: this.guessItem.length })
          .map((n, i) => i)
          .map((n, i, all) => {
            const j = i + Math.floor(Math.random() * (all.length - i))
            const v = all[j]
            all[j] = n
            return v
          })
          .slice(0, 3)
          .map(i => {
            return this.guessItem[i]
          })
        return r
      }
    }
  },
  mounted () {
    this.getFindInfo()
  },
  methods: {
    onBtnClick (btn, index) {
      if (btn.action === 'delete') {
        this.Items.splice(index, 1)
      } else {
        this.$refs.swipeItem[index].shrink()
      }
    },
    change: function () {
      // 当前显示的数组等于随机算出来的数组
      this.Items = this.changed
      // 更新数据
      this.guessItem.push(this.guessItem[0])
      this.guessItem.pop()
    }
  },
  watch: {
    // 点击删除添加新数组
    Items () {
      let i = Math.floor(Math.random() * 18)
      if (this.Items.length < 3) {
        this.Items.push(this.guessItem[i])
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'

.header
  padding: 0 0.2rem
  font-size: 0.24rem
  display: flex
  justify-content: space-between
  & span:last-child
    color: $theme-color
.container
  margin-top: 0.2rem
  display: flex
  flex-direction: column
  align-items: center
  height: 6rem
  overflow: hidden
  .swipe-item-wrapper
    flex: 1
    width: 100%
    height: 1.8rem
    margin-top: 0.2rem
    img
      max-width: 100%
      max-height: 100%
      width: auto
      height: auto
</style>
