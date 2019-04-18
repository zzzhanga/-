<!--  -->
<template>
  <div class="listener-box" id="listener-box" @click="close();close2()">
        <div class="head">
            <i class="cubeic-back" @click="goBack"></i>
        </div>
        <div class="listener" ref="outerNode">
 
          <nav class="listener-info">
              <div class="book-name">{{listenerItem.name}} <span class="iconfont" @click.stop="rate">&#xe632;</span> </div>
              <div class="listener-title">{{listenerItem.title}}</div>
              <div class="linenode">
                    <div class='progressnode' @click="drag" ref="progress">
                        <div class='trueLine' ref="line"></div>
                        <span class="circle" :style="styObj"></span>
				    </div>
                    <div class="duration">
                        <span class="start">{{cTime}}</span>
                        <span class="end">{{dTime}}</span>
                    </div>
              </div> 
              <div class="menu">
                  <span class="iconfont">&#xe604;</span>
                  <span class="iconfont" @click="rewind">&#xe661;</span>
                  <span class="iconfont"  @click="playPause" v-html="this.player">&#xe648;</span>
                  <span class="iconfont" @click="forward">&#xe65e;</span>
                  <span class="iconfont" @click.stop="timing">&#xe6c3;</span>
              </div>
          </nav>
        </div>
        <div v-show="ratestatu" class="rate-setting">
            <p>设置</p>
                <ul>
                <li @click="one">1x</li>
                <li @click="two"> 1.25x</li>
                <li @click="three">1.5x</li>
                <li @click="four">2x</li>
            </ul>
        </div>
        <div v-show="show" class="timer">
            <p>定时关闭</p>
            <ul>
                <li >听完当前章节</li>
                <li @click.stop="fifteen">2秒钟后</li>
                <li>30分钟后</li>
                <li>60分钟后</li>
            </ul>
        </div>
        <div class="avator-info">
                <div class="avator">
                    <img :src="listenerItem.autorurl">
                    <span>{{listenerItem.autor}}</span>
                </div>
                <div class="attention">
                    <cube-button class="cube-btn" id="cube=btn"  @click="attention">{{atten}}</cube-button>
                </div>
        </div>
        <audio :src="listenerItem.url"  ref="voice" @timeupdate="mission" preload="auto"></audio>
        <div class="publish border-bottom-1px"> 
            <span class="publish-time">{{listenerItem.publishtime}}</span>
            <span class="listen-in">{{listenerItem.listenin}}</span>
        </div>
        <div class="discuss">
            <ul>
                <li class="discuss-item border-top" v-for="item of items" :key="item.id"> 
                    <div class="portrait">
                        <img :src="item.portrait" alt="刘俊峰">
                    </div>
                    <div class="discuss-infobox">
                        <p class="discuss-info">
                            <span class="discuss-name">{{item.discussname}}</span>
                            <span class="submit-time">{{item.submittime}}</span>
                        </p>
                        <p class="speak">
                            {{item.speak}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
        name:'Listener',
        data () {
            return {
                styObj:{
                       left: '0'
                },
                player:'&#xe648;',
                listenerItem:[],
                items:[],
                show:false,
                ratestatu:false,
                cTime:'',
                dTime:'',
                atten:'关注'
                
            };
        },
        created() {
            // 发送ajax
            this.getFindInfo()
        },
        methods: {
        //返回
        goBack(){
            this.$router.back()
        },
        // 调用ajax
        getFindInfo(){
            axios.get('/static/mock/listener.json')
            .then(this.getFindInfoSucc)
        },
        // 获取数据
        getFindInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
            const data=res.data
            this.listenerItem=data.listenerItem
            this.items=data.items
            }
        },
        attention(){
            if(this.atten==='已关注'){
                this.atten='关注'
                this.$createDialog({
                type: 'confirm',
                icon: '',
                content: '取消关注后将不再收到该用户的动态信息',
                confirmBtn: {
                text: '取消关注',
                active: true,
                disabled: false,
                href: 'javascript:;'
                },
                cancelBtn: {
                text: '关闭',
                active: false,
                disabled: false,
                href: 'javascript:;'
                },
                onConfirm: () => {
                    this.atten='关注'
                this.$createToast({
                    type: 'correct',
                    time: 1000,
                    txt: '已取消关注'
                }).show()
                }
            }).show()
            }else{
                this.atten='已关注'
            }
        },
        //开始暂停
        playPause:function(ev){
            if(this.$refs.voice.paused){
                this.$refs.voice.play()
                this.player='&#xe6ae;'
            }
            else{
                this.$refs.voice.pause();
                this.player='&#xe648;'
            }
               
        },
        //快退快进
        rewind:function(){
            this.$refs.voice.currentTime=this.$refs.voice.currentTime-5
        },
        forward:function(){
            this.$refs.voice.currentTime=this.$refs.voice.currentTime+5
        },
        // 已听时间 和 剩余时间
        mission:function(e){
            this.$refs.line.style.width = this.$refs.voice.currentTime / this.$refs.voice.duration * 100 + '%';
            this.styObj.left=this.$refs.voice.currentTime / this.$refs.voice.duration * 100 + '%';
            this.s = String(Math.floor(e.target.currentTime) % 60).padStart(2,0)
            this.m = String(Math.floor(e.target.currentTime % 3600 /60)).padStart(2,0)
            this.cTime= this.m + ':' + this.s
    
            this.se = String(Math.floor(e.target.duration - e.target.currentTime) % 60).padStart(2,0);
            this.me = String(Math.floor(e.target.duration % 3600 /60 -e.target.currentTime % 3600 /60)).padStart(2,0);
          
            this.dTime=this.me + ':' + this.se
        },
        // 点击读条到相应位置
        drag:function(ev){
            // 当前已听时间=总时长* (读条真实点击的位置  |就是"读条点的距离-读条距页面的距离"|) / 读条总长度
            this.$refs.voice.currentTime = this.$refs.voice.duration * (ev.clientX - (this.$refs.line.offsetLeft+this.$refs.outerNode.offsetLeft)) / this.$refs.progress.offsetWidth
            // 读条已读百分比   读条点击位置/读条总长度   
            this.$refs.line.style.width = ((ev.clientX - (this.$refs.line.offsetLeft+this.$refs.outerNode.offsetLeft)) / this.$refs.progress.offsetWidth) * 100+  '%'
            
        },
      
        //速率
        rate:function(){
            this.ratestatu=!this.ratestatu
        },
        close:function(){
            this.ratestatu=false
        },
        one:function(){
             this.$refs.voice.playbackRate=1 

        },
        two:function(){
            this.$refs.voice.playbackRate=1.25
        },
        three:function(){
            this.$refs.voice.playbackRate=1.5
        },
        four:function(){
            this.$refs.voice.playbackRate=2
        },
        
          // 定时
        timing:function(){
            this.show=!this.show
        },
        close2:function(){
            this.show=false
        },
        // 定时关闭
        fifteen:function(){
            setTimeout(()=>{
                this.$refs.voice.pause();
                this.playStatu=false
            },2000)
        },

    }
    
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .attention >>> .cube-btn
        background #fff
        color #000
        font-size .24rem
    .head
        height 1rem
        line-height 1rem
        margin-left .2rem
        .cubeic-back
            font-size .4rem
    .avator-info
        padding 0 .4rem
        margin-top .4rem
        line-height .8rem
        display flex
        justify-content space-between
        .avator
            position relative
            width 2rem
            height 1rem
            img 
                width 1rem
                height 1rem
                border-radius 50%
    .listener
        position relative
        top .1rem
        text-align center
        line-height 1.5rem
        background #929496
        opacity .8
        color #fff
        margin  .4rem
        border-radius .6rem
        padding .1rem
        .listener-title
            font-size .28rem
            letter-spacing .028rem
        .book-name
            font-size .36rem
            margin-left .4rem
            .iconfont
                float right 
                font-size .4rem
                margin-right .2rem
        .menu
            display flex
            justify-content space-around
            .iconfont
                font-size .5rem
                flex 1
        .linenode
            width: 100%;
            height: 1rem;
            .progressnode
                width 100%
                height .05rem
                float left
                background: #adadad;
                position: relative;
                .trueLine
                    position: absolute
                    top: 0.01rem;
                    height: .05rem;
                    width: 0%;
                    background: #dfdfdf ;
                    border-radius: 6px; 
                .circle
                    position absolute
                    top -.06rem
                    display inline-block
                    width .2rem
                    height .2rem
                    border-radius 50%
                    background #fff
            .duration
                height .2rem
                line-height .6rem
                display flex
                width 100%
                justify-content space-between
                font-size .24rem
    .timer
        position absolute
        bottom 0
        width 100%
        z-index 3
        background #ffffff
        line-height 1rem
        text-align center
    .rate-setting
        position absolute
        bottom 0
        width 100%
        z-index 3
        background #ffffff
        line-height 1rem
        text-align center
        background #fff
    .publish
        font-size .24rem
        display flex
        justify-content space-between
        margin .4rem .5rem 0 .4rem
        color #ccc
    .discuss
        margin-top .8rem
        .discuss-item
            position relative
            display flex
            justify-content space-between
            padding 0 .2rem
            margin-top .4rem
            .portrait
                flex 1
                width .5rem
                height .5rem
                img 
                    width 100%
                    height 100%
                    border-radius 50%
            .discuss-infobox
                flex 12
                display flex
                flex-direction column
                justify-content space-between
                font-size .24rem
                .discuss-info
                    flex 1
                    color #999
                    display flex
                    justify-content space-between
                    padding .2rem
                .speak
                    flex 2

</style>