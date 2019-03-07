<!--  -->
<template>
    <div>
        <section class="content">
          <div class="one">
              <div class="one-img">
                  <img :src="this.imgUrl" alt="">
              </div>
              <div class="one-text">
                  <h3>{{this.booktitle}}</h3>
                  <router-link class="autor" tag="p" to="/">{{this.autor}}</router-link>
                  <p class="text-detail">{{this.detail}}</p>
                  <p class="buy"><span>{{this.money}}</span> <span>{{this.member}}</span> <span>{{this.list}}</span></p>
              </div>
          </div>
          <div class="two border-bottom">
              <div class="two-left">
                  <p class="two-left-first">
                        <span class="number">{{this.number}}</span>
                        <span class="rating">{{this.rating}}</span>
                  </p>
                  <p class="review">
                      {{this.review}}
                  </p>
                 
              </div>
              <div class="two-right">
                  <p class="two-right-first">
                      <span class="people-num">{{this.peoplenum}}</span><span>人阅读</span>
                  </p>
                  <p class="read">
                      {{this.who}}
                  </p>

              </div>
          </div>
          <div class="three">
              <p class="score">
                  <span>轻点评分</span>
                  <span>☆☆☆☆☆</span>
              </p>
          </div>
      </section>

      <div class="wonderful">
            <h2 class="header-title border">{{title}}</h2>
            <div class="container">
                <section 
                    class="container-item border-bottom"
                    v-for="item of items"
                    :key="item.id"
                >
                    <div class="item-head">
                        <div class="avator">
                            <img :src="item.img" alt="">
                        </div>
                        <span class="name">{{item.name}}</span>
                        <span class="review">{{item.review}}</span>
                    </div>
                    <div class="review-content">
                        {{item.reviewcontent}}
                    </div>
                    <div class="features">
                        <div><span class="iconfont">&#xe6c4;</span> <span class="forward">{{item.forward}}</span></div>
                        <div><span class="iconfont">&#xe664;</span> <span class="love">{{item.love}}</span></div> 
                        <div><span class="iconfont">&#xe621;</span> <span class="message">{{item.message}}</span></div> 
                    </div>
                </section>
                <p class="more">{{more}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailWonderful',
    data () {
        return {
            imgUrl:'/api/bookcover1.png',
            booktitle:'给予者',
            autor:'朱迪·罗宾奈特',
            detail:'商业思想领袖朱迪·罗宾奈特(Judy Robinett)被<<福布斯>>等媒体称为"超级给予者,在连接人脉',
            money:'27.00',
            member:'·无限卡',
            list:'☰ 目录',
            number:'7.5',
            rating:'★★★★☆',
            review:'80人点评 >',
            peoplenum:'1394',
            who:'leo张大志在读 >',
            title:'精彩点评',
            more:'展开更多点评',
            items:[{
                id:'0001',
                img:'/static/image/avator6.png',
                name:'Vivi',
                review:'点评 ★★★★☆',
                reviewcontent:'每个人都有礼物等着给予或接受，每个人都有问题需要别人帮助或解决。不管自己现在处在什么层次，学会做一个给予者：开放、利他，有独到的眼光和解决问题的实际能力，在人脉生态圈里为别人带来或创造价值、互相增值。只有自己不断优秀了，人脉才叫人脉，不然那只能叫好友数量。',
                forward:'10',
                love:'134',
                message:'6'
            },{
                id:'0002',
                img:'/static/image/avator7.png',
                name:'孤独的寻觅者',
                review:'点评 ★★★★★',
                reviewcontent:'在这个商业时代里，我们每个人都或多或少的需要别人的帮助或者被人需求。那么建立一个良好的人脉网络圈就非常的重要，《给予者》给我们指明了方式方法，让我们怎么去建立以及维护好自己高质量的人脉网络，它给我们分了三个级别，即:核心关系5人+关键关系50人+重要关系100人。',
                forward:'',
                love:'3',
                message:''
            },{
                id:'0003',
                img:'/static/image/avator8.png',
                name:'R.I.W',
                review:'点评 ★★☆☆☆',
                reviewcontent:'生活中的每个圈子都是一个生态系统，进入到不同的生态系统可以得到不同的发展，在这些生态系统中同样是先要给予，其次才会有回报。自身的成长大多来自于自己付出的多少。',
                forward:'',
                love:'8',
                message:''
            },{
                id:'0004',
                img:'/static/image/avator9.png',
                name:'邱静洁',
                review:'点评 ★★★★☆',
                reviewcontent:'其实，《给予者》就是一个连接者，即中间人，把两个不认识的又有同样需要的人链接起来并使之产生价值就是给予者最好的诠释。而且在给予的同时我们要明白是否是他们所需要的，给予的目标，时间和地点是否正确。',
                forward:'1',
                love:'5',
                message:''
            },{
                id:'0005',
                img:'/static/image/avator10.png',
                name:'诺诺',
                review:'点评 ★★★★☆',
                reviewcontent:'这个世界，最怕冷静又疯狂的人：这个世界，不怕冷静的人，因为人一冷静，骨子里的热血就会冷下来，少了勇往直前的冲劲；这个世界，不怕疯狂的人，因为人一疯狂，就会失去理智，最后自取灭亡。只有冷静又疯狂，才能在纷乱的变局中，找准问题的本质，以冷静柔软的力量，将危机化解！',
                forward:'1',
                love:'33',
                message:''
            }]
        };
    }

}

</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
@import '~styles/varibles.styl'
    .content
        padding .1rem
        .one
            display flex
            height 3rem
            .one-img
                flex 1
                img 
                    width auto 
                    height auto 
                    max-width 100%
                    max-height 100%
            .one-text
                padding-left .2rem
                flex 2
                line-height .4rem
                h3
                    margin-top .2rem
                    font-size .4rem
                .autor
                    margin-top .2rem
                    font-size .24rem
                    color $Color
                .text-detail
                    margin-top .3rem
                    font-size .24rem
                    ellipsis()
                    -webkit-line-clamp 2
                .buy
                    margin-top .3rem
                    font-size .2rem
                    color #ccc
                    :nth-child(1)
                        text-decoration line-through
                    :nth-child(3)
                        margin-left 1.5rem

        .two 
            margin-top .4rem
            height 1rem
            display flex
            justify-content space-between
            .two-left 
                flex 1
                margin-left .2rem
                .number
                    font-size .5rem
                .rating
                    margin-left .1rem
                    font-size .3rem
                .review
                    font-size .16rem
                    color #ccc
                    margin-top .2rem
            .two-right
                flex 1
                font-size .2rem
                .two-right-first
                    .people-num
                        font-size .4rem
                        padding-right .1rem
                .read
                    margin-top .2rem
                    font-size .18rem
                    color #ccc
        .three
            margin-top .4rem
            .score
                overflow hidden
                :nth-child(1)
                    margin-left .4rem
                    margin-top .3rem
                    float left
                    font-size .2rem
                :nth-child(2)
                    float right 
                    margin-right .4rem
                    font-size .6rem
                    color $Color
                    
    .wonderful
        background #ccc
        overflow hidden
        .header-title
            margin-top .2rem
            padding .2rem
            height 1rem
            line-height 1rem
            font-weight 600
            font-size .32rem
            background #fff
        .container
            &>:first-child
                margin-top 0 !important
            .container-item
                margin-top .2rem
                padding .4rem
                background #fff
                .item-head
                    height .8rem
                    line-height .8rem
                    .avator
                        display inline-block
                        width .5rem
                        height .5rem
                        img 
                            border-radius 50%
                            width auto
                            height auto
                            max-width 100%
                            max-height 100%
                    .name
                        margin-left .1rem
                    .review
                        margin-left .1rem
                .review-content
                    margin-top .2rem
                    font-size .24rem
                    line-height .4rem
                    -webkit-line-clamp 5
                    ellipsis()
                .features
                    margin-top .2rem
                    display flex
                    justify-content space-between
                    padding 0 .2rem .3rem
            .more
                display flex
                justify-content center
                align-items center
                height 1rem
                background #fff 
                color $Color
                font-size .24rem
                padding-bottom 1rem


                
                        



</style>