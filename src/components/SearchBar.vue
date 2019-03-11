<template>
  <div class="header">
        <div class="header-input">  
            <router-link to="/like" class="iconfont search" >&#xe634;
            <input type="text" placeholder="三体" v-model.lazy="msg">
            </router-link>
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
            msg:'',
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
@import '~styles/varibles.styl'
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
        input 
            text-indent .2rem
        .icon-right
            height .6rem
            float right
            .book-city
                padding .18rem
                color $Color


</style>