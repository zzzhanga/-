<!--  -->
<template>
  <div class="history">
    <header class="history-header">
      <span>历史记录</span>
      <span @click="showConfirm">清空</span>
    </header>
    <ul class="content">
      <li class="items" v-for="(item, index) of lis" :key="index">
        <span class="iconfont">&#xe634;</span>
        &nbsp; &nbsp;{{item.txt}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'LikeHistory',
  data () {
    return {
      lis: []
    }
  },
  mounted () {
    // 有缓存    使用缓存
    if (localStorage.item) {
      this.lis = JSON.parse(localStorage.item)
    }
  },
  computed: {
    // 获取传过来的keyword值
    ...mapGetters(['keyword'])
  },
  methods: {
    // 设置keyword
    ...mapMutations({
      setKeyWord: 'SET_KEY_WORD'
    }),
    // 清空所有内容
    clear () {
      localStorage.clear()
      this.lis = []
    },
    showConfirm () {
      this.$createDialog({
        type: 'confirm',
        content: '是否清空历史列表',
        confirmBtn: {
          text: '清空',
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
          this.clear()
        }
      }).show()
    }
  },
  watch: {
    // 检测搜索传过来的值
    keyword () {
      // 把传过来的值添加到数组
      this.lis.push({ txt: this.keyword })
      // 把数组存储在缓存内
      var data = JSON.stringify(this.lis)
      localStorage.item = data
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/variable.styl'

.history-header
  display: flex
  height: 1rem
  justify-content: space-between
  align-items: center
  padding: 0 0.2rem
  font-size: 0.24rem
  :nth-child(2)
    color: $theme-color
.content
  padding: 0.1rem
  .items
    font-size: 0.24rem
    padding: 0.4rem 0.2rem
</style>
