<!--  -->
<template>
  <div class="bottom-bar">
      <ul>
          <li class="bar-item">
              <p class="iconfont icon">&#xe663;</p>
              <p class="item-text">发现</p>
          </li>
          <li class="bar-item">    
              <p class="iconfont icon">&#xe60a;</p>
              <p class="item-text">书架</p>
          </li>
          <li class="bar-item">    
              <p class="iconfont icon">&#xe7b9;</p>
              <p class="item-text">想法</p>
          </li>
          <li class="bar-item">    
              <p class="iconfont icon">&#xe62f;</p>
              <p class="item-text">我的</p>
          </li>                    
      </ul>
  </div>
</template>

<script>
export default {
    name: 'BottomBar',    
}

</script>
<style lang="stylus" scoped>
    .bottom-bar
        position fixed
        left 0
        right 0
        bottom 0
        text-align center
        .bar-item
            display inline-block
            width 24vw
            .icon
                font-size .5rem
            .item-text
                margin-top .1rem
                font-size .2rem   

</style>