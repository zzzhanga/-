<template>
  <div class="message">
     <div 
        class="message-item" 
        v-for="item of items"
        :key="item.id"
     >
         <span class="message-title">{{item.txt}}</span>
         <img class="message-img" :src="item.imgUrl" alt="">
     </div>
     <p class="message-updata border-bottom">换一批</p>
  </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            items:[{
                id:"001",
                txt:"我,今年32岁,存款为0:三十不立,才是真实的人生",
                imgUrl:"../../../../static/image/m1.png"
            },
            {
                id:"002",
                txt:"咪蒙消失了,我并不开心",
                imgUrl:"../../../../static/image/m2.png"
            },
            {
                id:"003",
                txt:"刘德华负债4000万的背后,藏着8个人的秘密",
                imgUrl:"../../../../static/image/m3.png"
            }]
            
        }
    },
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .message
        position absolute
        top 1.5rem
        .message-item
            width 100%
            height 2rem
            .message-title
                float left
                width 4rem
                line-height .6rem
                margin-left .2rem
                margin-right .6rem
            .message-img 
                float right
                width 2rem
        .message-updata
            text-align center
            color $Color

</style>