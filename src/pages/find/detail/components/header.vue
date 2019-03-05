<!--  -->
<template>
  <div>
      <header class="header">
          <router-link tag="span" to="/" class="iconfont back">&#xe624;</router-link>
          <span class="iconfont people">&#xe62f;</span>
      </header>
      <section class="content">
          <div class="one">
              <div class="one-img">
                  <img :src="this.imgUrl" alt="">
              </div>
              <div class="one-text">
                  <h3>{{this.title}}</h3>
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
  </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            imgUrl:'../../../../../static/image/bookcover1.png',
            title:'给予者',
            autor:'朱迪·罗宾奈特',
            detail:'商业思想领袖朱迪·罗宾奈特(Judy Robinett)被<<福布斯>>等媒体称为"超级给予者,在连接人脉',
            money:'27.00',
            member:'·无限卡',
            list:'☰ 目录',
            number:'7.5',
            rating:'★★★★☆',
            review:'80人点评 >',
            peoplenum:'1394',
            who:'leo张大志在读 >'
        };
    }
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
    .header
        position fixed
        top 0
        z-index 2
        height 1rem
        line-height 1rem
        padding .1rem .2rem
        background #fff
        width 100%
        .back
            font-size .5rem
            float left
        .people
            float right
            position relative
            right .6rem
            font-size .5rem
            &:after
                position absolute
                top -0.1rem
                content "19"
                font-size .08rem
                display inline
    .content
        margin-top 1.2rem
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
            border-b
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
                    
                    


        
</style>