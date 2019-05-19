<!--  -->
<template>
  <div class="mine-info">
    <div class="info-avator">
      <img class="avator-img" :src="this.imgUrl" alt>
      <span class="iconfont detail-enter">&#xe633;</span>
    </div>
    <p class="mine-signature">{{ signature}}</p>
  </div>
</template>

<script>
export default {
  name: 'MineInfo',
  props: {
    imgUrl: String,
    signature: String
  }
}
</script>
<style lang="stylus"  scoped>
.mine-info
  margin-top: 1rem
  display: flex
  flex-direction: column
  align-items: center
  .info-avator
    display: flex
    align-items: center
    width: 1.5rem
    height: 1.5rem
    .avator-img
      border-radius: 50%
      width: 100%
    .detail-enter
      margin-left: 2rem
  .mine-signature
    margin-top: 0.5rem
    color: #999
</style>
