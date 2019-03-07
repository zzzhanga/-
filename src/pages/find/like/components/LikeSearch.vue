<template>
  <div class="header">
        <router-link to="/" tag="span"  class="iconfont back">&#xe624;</router-link>
        <div class="header-input">  
            <span class="iconfont search" >&#xe634;</span>
            <input type="text" v-model="keyword" placeholder="三体"  @keyup.13="show($event)">
      </div>
  </div>
</template>

<script>
export default {
    name: "FindHeader",
    data() {
        return {
            keyword:''
        }
    },
    // directives: {
    //     debounce: {
    //         inserted: function (el, binding) {
    //         let timer
    //         el.addEventListener('keypress', () => {
    //         if (timer) {
    //         clearTimeout(timer)
    //         }
    //         timer = setTimeout(() => {
    //             binding.value()
    //         }, 500)
    //         })
    //         }
    //     }
    // },
    methods: {
        show (ev) {
            this.$store.state.keyword=this.keyword
            this.$store.commit('changekeyword',this.keyword);
            this.keyword=''
        }
    },
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        position fixed
        top 0
        z-index 2
        background #fff
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
                width 5.5rem
                text-indent .2rem
                background #F5F5F5


</style>