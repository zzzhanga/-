<template>
  <div class="header">
        <router-link to="/" tag="span"  class="iconfont back">&#xe624;</router-link>
        <div class="header-input">  
            <span class="iconfont search" >&#xe634;</span>
            <input type="text" placeholder="三体">
      </div>
  </div>
</template>

<script>
export default {
    name: "FindHeader",
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        width 100%
        height .8rem
        display flex
        line-height .8rem
        margin-top .2rem
        .back
            flex 1
            font-size .6rem
            color #ccc
        .header-input
            flex 8
            padding-left .2rem
            margin-right .2rem
            border-radius .5rem
            border .01rem solid #ccc
            color : #ccc
            background #F5F5F5
            overflow hidden
            .search
                float left
            input 
                text-indent .2rem


</style>