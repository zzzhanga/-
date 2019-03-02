<!--  -->
<template>
  <div class="search-box">
        <div class="search-input">  
            <span class="iconfont search">&#xe634;</span>
            <input type="text" placeholder="搜索">
      </div>
      <div class="iconfont book-his">&#xe7d3;</div>
  </div>
</template>

<script>
export default {
    name: "BookSearch",
}

</script>
<style lang="stylus" scoped>
    .search-box
        margin-top 1rem
        height 1rem
        .search-input
            display inline-block
            float left
            background #f0f0f0
            width 5.2rem
            height .4rem
            line-height .4rem
            margin-left .4rem
            padding .1rem .4rem
            border .01rem solid #ccc
            border-radius .4rem
            color #C0C0C0
            .search
                float left
        input 
            background #f0f0f0
            text-indent .2rem
        .book-his
            float right  
            height .6rem
            line-height .6rem
            font-size .68rem    
            margin-right .4rem  
            color #C0C0C0
</style>