<!--  -->
<template>
  <div class="search-box">
        <div class="search-input">  
            <span class="iconfont search">&#xe634;</span>
            &nbsp;&nbsp;&nbsp;&nbsp;搜索
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
        height .6rem
        .search-input
            display inline-block
            float left
            background #F5F5F5
            width 5.2rem
            height .4rem
            line-height .4rem
            margin-left .1rem
            padding .1rem .4rem
            border .01rem solid #ccc
            border-radius .4rem
            color #C0C0C0
            .search
                float left
        .book-his
            float right  
            height .6rem
            line-height .6rem
            font-size .68rem    
            margin-right .1rem  
            color #C0C0C0
</style>