<template>
    <div>
        <div class="header">
                <router-link to="/" tag="span"  class="iconfont back">&#xe624;</router-link>
                <div class="header-input">  
                    <span class="iconfont search" >&#xe634;</span>
                    <input type="text" v-model="key" placeholder="三体"  @keyup.13="show($event)">
                </div>
        </div>
        <div class="search-content" ref="search" v-show="key">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">
                    <img :src="item.img" alt="">
                    <router-link to='/detail' tag="p" class="no1 border-top">没搜到想找的?把你想找的书告诉我们</router-link>
                </li>
                <div class="search-item border-bottom none" v-show="hasData">
                    <p></p>
                    <p>没有找到相关的书籍</p> 
                    <router-link to='/detail' tag="p" class="no2 border-top">没搜到?把你想找的书告诉我们</router-link>
                </div>
            </ul>
        </div>
    </div>  
</template>

<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
    name: "FindHeader",
    data() {
        return {
            key:'',
            Title:[],
            list:[],
            timer:null
        }
    },
    computed: {
        //如果没有搜到数据,显示没有相关的书籍.有数据的话就不显示
        hasData(){
            return !this.list.length
        }
    },
    methods: {
        show (ev) {
            //传递key值,因为历史记录里要用
            this.$store.commit('changekeyword',this.key);
            this.key=''
        },
        //请求ajax
        getFindInfo(){
            axios.get('./api/find.json')
            .then(this.getFindInfoSucc)
        },
        //获取服务端数据
        getFindInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
            const data=res.data
            this.Title=data.Title
            }
        }
    },
    mounted() {
        //调用ajax
        this.getFindInfo();
        this.scroll=new Bscroll(this.$refs.search)
    },
    watch: {
        //检测输入值变化
        key(){
            //有定时器先清除
            if(this.timer){
                clearTimeout(this.timer)
            }
            //没有key值情况搜索内容
            if(!this.key){
                this.list=[]
                return
            }
            //定时,因为用户输入过快,所以使用事件节流
            this.timer=setTimeout( ()=> {
                const result = [];
                //循环所有搜索资源
                for (let i in this.Title) {
                    //循环资源中的每一项
                    this.Title[i].forEach( (value) => {
                        //检测资源中的拼音和书名  如果能找到就把它添加到数组
                        if( value.spell.indexOf(this.key) > -1 || value.name.indexOf(this.key) > -1 ){
                            result.push(value)
                        }
                    })
                }
                this.list=result
            }, 100)
        }
    }
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        background #fff
        width 100%
        line-height .7rem
        display flex
        margin-top .2rem
        padding-right .2rem
        .back
            flex 1
            font-size .6rem
            color #ccc
        .header-input
            flex 9
            padding-left .2rem
            margin-right .2rem
            border-radius .5rem
            border .01rem solid #ccc
            color : #ccc
            background #F5F5F5
            .search
                float left
            input 
                width 5.8rem
                height .7rem
                text-indent .2rem
                background #F5F5F5
    .search-content
        overflow hidden
        position relative
        top .2rem
        left 0
        right 0
        bottom 0
        z-index 2
        line-height 1rem
        min-height 12.5rem
        background #fff
        .search-item
            margin-top .4rem
            text-indent .1rem
            img 
                width auto 
                max-width 100%
            .no1
                position fixed
                bottom 0
                width 100%
                color $Color
                text-align center
                font-size .22rem
                padding-bottom .2rem
        .none
            position relative
            display flex
            flex-direction column
            justify-content space-between
            align-items center
            height 12.5rem
            .no 
                width 100%
                color $Color
                text-align center
                font-size .22rem
                line-height 1rem
                padding-bottom .2rem
</style>