<!--  -->
<template>
  <div class="bottom-bar">
      <ul>
          <router-link
            to="/" 
            tag="li"
            class="bar-item"
          >
              <p class="iconfont icon">&#xe663;</p>
              <p class="item-text">发现</p>
          </router-link>
          
          <router-link
            to="/book/"
            tag="li"
            class="bar-item"
           >    
              <p class="iconfont icon">&#xe60a;</p>
              <p class="item-text">书架</p>
          </router-link>

          <router-link
            to="/Idea/"
            tag="li"
            class="bar-item"
          >    
              <p class="iconfont icon">&#xe64c;</p>
              <p class="item-text">想法</p>
          </router-link>
          
          <router-link
             to="/Mine"
             tag="li"
             class="bar-item"
          >    
              <p class="iconfont icon">&#xe62f;</p>
              <p class="item-text">我的</p>
          </router-link>                    
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
        bottom 0
        text-align center
        background #fff
        .bar-item
            display inline-block
            width 24vw
            .icon
                font-size .5rem
            .item-text
                margin-top .1rem
                font-size .2rem   

</style>