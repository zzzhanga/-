<template>
    <div class="message scroll-list-wrap">
        <cube-scroll
        ref="scroll"
        :data="message"
        :options="options"
        @pulling-down="onPullingDown"
       >
            <div 
                class="message-item animated fadeIn" 
                v-for="item of message"
                :key="item.id"
            >
                <span class="message-title">{{item.txt}}</span>
                <img  class="message-img " :src="item.imgUrl" alt="">
            </div>
            <p class="message-updata border-bottom" @click="onPullingDown">下拉刷新哦</p>
         </cube-scroll>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Message",
    data() {
        return {
            message:[],
            options: {  
                pullDownRefresh: {
                threshold: 30,
                stopTime: 600,
                txt: '更新成功'
                },
            },
        }
    },
    methods: {
        onPullingDown() {
            setTimeout(() => {
                this.getIdeaInfo()
            }, 200)
        },
        getIdeaInfo(){
            axios.get('/static/mock/idea.json')
            .then(this.getIdeaInfoSucc)
        },
        getIdeaInfoSucc(res){
            let i = Math.floor(Math.random()*9) 
            res=res.data
            if(res.ret && res.data){
            const data=res.data
            this.message=data.message.splice(i,3)
            }
        },
    },
    mounted() {
        this.getIdeaInfo()
    },
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
            height .8rem
            line-height .8rem
            font-size .2rem
            text-align center
            color $Color


</style>