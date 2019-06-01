<template>
  <div class="bottom-bar border-top-1px">
    <router-link to="/find" class="bar-item">
      <i class="iconfont">&#xe663;</i>
      <span class="item-text">发现</span>
    </router-link>
    <router-link to="/book" class="bar-item">
      <i class="iconfont">&#xe60a;</i>
      <span class="item-text">书架</span>
    </router-link>
    <router-link to="/idea" class="bar-item">
      <i class="iconfont">&#xe64c;</i>
      <span class="item-text">想法</span>
    </router-link>
    <router-link to="/mine" class="bar-item">
      <i class="iconfont">&#xe62f;</i>
      <span class="item-text">我</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      index: 0
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variable"

.bottom-bar
  position: fixed
  bottom: 0
  width: 100%
  height: 8vh
  display: flex
  text-align: center
  color: #000
  background: #fff
  z-index: 1
  .bar-item
    flex: 1
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    &.router-link-active
      color: $theme-color
    .iconfont
      font-size: 0.5rem
      margin-bottom: 0.1rem
    .item-text
      font-size: 0.22rem
</style>
