<template>
    <div>
        <header class="head">
            <span class="iconfont back" @click="goBack">&#xe624;</span>
            <search-bar class="header"  v-show="visible">
                <span class="iconfont search" slot="left">&#xe634;</span>
                <input  type="text"  class="icon-center" slot="center" placeholder="三体" v-model="key" @keyup.13="show($event)">
            </search-bar>
        </header>
        <div class="search-content" ref="search" v-show="key">
            <ul>
                <li class="search-item border-bottom " v-for="item of list" :key="item.id">
                    <img :src="item.img" alt="">
                </li>
                <div class="search-item border-bottom none" v-show="hasData">
                    <p class="no2">没有找到相关的书籍</p> 
                </div>
            </ul>
             <router-link to='/' tag="p" class="no1 border-top">没搜到?把你想找的书告诉我们</router-link>
        </div>
       
    </div>  
</template>

<script>
import SearchBar from "./../../../../components/SearchBar";
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
    name: "FindHeader",
    data() {
        return {
            key:'',
            Title:[],
            list:[],
            timer:null,
            visible:true
        }
    },
    components: {
        SearchBar
    },
    computed: {
        //如果没有搜到数据,显示没有相关的书籍.有数据的话就不显示
        hasData(){
            return !this.list.length
        }
    },
    methods: {
        goBack(){
            this.$router.history.go(-1);
        },
        show (ev) {
            //传递key值,因为历史记录里要用
            this.$store.commit('changekeyword',this.key);
            this.key=''
        },
        //请求ajax
        getFindInfo(){
            axios.get('/static/mock/find.json')
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
    .header >>> .mine-navbar
        width 100%
        border 1px solid #ccc
        border-radius .8rem
    .head
        margin-top .2rem
        display flex
        overflow hidden
        .back
            width 1rem
            font-size .8rem
            color #999
        .header
            flex 1
            display flex
            float right
            .header-input
                flex 1
                input 
                    width 90%
                    height .7rem
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
            left 0
            bottom 0
        .no1
        .no2 
            color $Color
            font-size .24rem
            width 100%
            text-align center
            line-height 1rem
</style>