<template>
  <div class="header">
        <div class="header-input">  
            <span class="iconfont search">&#xe634;</span>
            &nbsp;&nbsp;&nbsp;&nbsp;三体
            <span class="icon-right">|&nbsp;&nbsp;
                <span class="book-city" @click="toLink">书城</span>
            </span> 
      </div>
  </div>
</template>

<script>
export default {
    name: "FindHeader",
    data() {
        return {
            url:'http://book.3g.cn/'
        };
    },
    methods: {
        toLink(){
            window.location.href=this.url
        }
    }
   
}

</script>
<style lang="stylus" scoped>
    .header-input
        border-radius .4rem
        margin .2rem
        padding .1rem .4rem
        height .6rem
        line-height .6rem
        border .01rem solid #ccc
        color : #ccc
        .search
            float left
        .icon-right
            height .6rem
            float right
            .book-city
                padding .18rem
                color #87CEFA


</style>