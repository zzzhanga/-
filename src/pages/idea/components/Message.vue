<template>
  <div class="message">
     <div 
        class="message-item animated fadeInUp" 
        v-for="item of dataList"
        :key="item.id"
     >
         <span class="message-title">{{item.txt}}</span>
         <img  class="message-img " :src="item.imgUrl" alt="">
     </div>
     <p class="message-updata border-bottom nimated fadeInUp" @click="updata" >下拉刷新哦</p>
  </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        dataList:Array
    },
    methods:{
        updata(){
            this.$emit('UpData')
        }
    }
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .message
        .message-item
            width 100%
            height 2rem
            display flex
            margin-top .2rem
            .message-title
                flex 1
                font-size .24rem
                line-height .4rem
                margin .4rem .6rem .2rem .2rem
            .message-img 
                width 2rem
                padding  .2rem
        .message-updata
            font-size .2rem
            text-align center
            color $Color
            padding-bottom .2rem

</style>