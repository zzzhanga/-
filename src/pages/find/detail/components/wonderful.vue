<!--  -->
<template>
    <div>
        <section class="content">
          <div class="one">
              <div class="one-img">
                  <img :src="detailList.imgUrl" alt="">
              </div>
              <div class="one-text">
                  <h3>{{detailList.booktitle}}</h3>
                  <router-link class="autor" tag="p" to="/">{{detailList.autor}}</router-link>
                  <p class="text-detail">{{detailList.detail}}</p>
                  <p class="buy"><span class="iconfont">&#xe604;</span><span>{{detailList.money}}</span>  <span>{{detailList.list}}</span></p>
              </div>
          </div>
          <div class="two border-bottom">
              <div class="two-left">
                  <p class="two-left-first">
                        <span class="number">{{detailList.number}}</span>
                        <span class="rating">{{detailList.rating}}</span>
                  </p>
                  <p class="review">
                      {{detailList.review}}
                  </p>
                 
              </div>
              <div class="two-right">
                  <p class="two-right-first">
                      <span class="people-num">{{detailList.peoplenum}}</span><span>人阅读</span>
                  </p>
                  <p class="read">
                      {{detailList.who}}
                  </p>

              </div>
          </div>
          <div class="three">
                  <p>
                      轻点评分
                  </p>
                  <p class="star">
                     <cube-rate class="cube-rate" v-model="starNumber"></cube-rate>
                 </p>
          </div>
      </section>

      <div class="wonderful">
            <h2 class="header-title border">{{detailList.title}}</h2>
            <div class="container">
                <section 
                    class="container-item border-bottom"
                    v-for="item of detailItem"
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
                <p class="more">{{detailList.more}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailWonderful',
    props:{
        detailList: Object,
        detailItem: Array
    },
    data() {
        return {
            starNumber:4.8
        }
    },
    watch: {
        starNumber(){
            const toast = this.$createToast({
                type:'correct',
                txt: '点评成功',
                time: 1000,
            })
            toast.show()
        }
    },

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
                    :nth-child(2)
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
            display flex
            justify-content space-between
            align-items center
            height 1.8rem
            padding 0 .2rem
            p
                font-size .28rem

    .wonderful
        background #ccc
        overflow hidden
        .header-title
            margin-top .2rem
            padding .2rem
            height .6rem
            line-height .6rem
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