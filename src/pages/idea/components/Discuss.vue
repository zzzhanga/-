<template>
  <div class="discuss">
      <div 
        class="discuss-item"
        v-for="item of items"
        :key="item.id"
      >
          <p class="item-top">
              <span class="item-avator" :style="item.avatar"></span>
              <span class="item-name">{{item.name}}</span>
              <span class="item-time">{{item.time}}</span>
            </p>
          <div class="item-bottom">
                <p class="item-talk">{{item.talk}}</p>
                <div class="item-detail">
                    <p class="item-quote border-bottom">{{item.quote}}</p>
                        <div class="item-book-detail">
                            <div class="item-book-cover-box">
                                <img class="item-book-cover" :src="item.cover" alt="">
                            </div>
                            <div class="item-column">
                                <p class="item-book-name">{{item.bookname}}</p>
                                <p class="item-aitor">{{item.autor}}</p>
                            </div>
                        </div>
                </div>
                <div class="item-icon">
                    <span class="iconfont">&#xe6c4;</span>
                    <span class="iconfont">&#xe664;</span>
                    <span class="iconfont">&#xe621;</span>
                </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "Discuss",
    data() {
        return {
            items:[{
                id:"0001",
                avatar:{
                    background:'url("../../../../static/image/avator.jpg")',
                    backgroundSize:'cover'
                    },
                name:'沧海的雨季',
                time:'19:19',
                talk:'新的机遇来临时,每个人都是基于自己的理性思考,判断出未来的方向,方向的正确是企业成功的必要条件,在当下这个时代,我们的机遇在哪个行业?我们该如何找到方向?',
                quote:'我真的认为是存在技术竞赛的.但当有人开了信号枪,大多数人却跑错了方向.他们在努力地研发16位机,研发更大的内存.但我觉得竞赛根本不是比这个.我认为这是一场软件的竞赛',
                cover:'../../../../static/image/item30.png',
                bookname:'硅谷热',
                autor:'埃弗里特· M .罗杰斯朱迪丝· K .拉森'

            },
            {
                id:"0002",
                avatar:{
                    background:'url("../../../../static/image/auator2.jpg")',
                    backgroundSize:'cover'
                    },
                name:'Shelley',
                time:'17:19',
                talk:'吴军老师的浪潮之巅也比较有意思,他把历史都串联了起来,不知道这本书有没有连贯性啊.',
                quote:'那些最能具体体现其艺术特色、最具有生命力并得以长存的成功之作往往只产生于极其短暂而罕见的灵感迸发的刹那之间.',
                cover:'../../../../static/image/item1.png',
                bookname:'人类群星闪耀时',
                autor:'斯蒂芬·茨威格'

            },
                        {
                id:"0003",
                avatar:{
                    background:'url("../../../../static/image/avator3.jpg")',
                    backgroundSize:'cover'
                    },
                name:'亚奇',
                time:'13:19',
                talk:'这样才会超出客户的期望,这种寻求平衡的方法很重要,如果没有标准,很大程度取决于做决定的人.',
                quote:'但这并不是说产品的易用性凌驾在其他因素之上,所有的伟大设计都是在艺术美、可靠性、安全性、易用性、成本和功能之间寻求平衡与协调',
                cover:'../../../../static/image/item15.png',
                bookname:'设计心理学',
                autor:'唐纳德·A·诺曼'

            },
            {
                id:"0004",
                avatar:{
                    background:'url("../../../../static/image/avator4.jpg")',
                    backgroundSize:'cover'
                    },
                name:'王伟强',
                time:'9:12',
                talk:'因为热爱,所以专注.因为信念,所以在乎.因为信仰,所以创新.',
                quote:'我活着,就是为了改变世界.',
                cover:'../../../../static/image/item25.png',
                bookname:'追随你的心',
                autor:'史蒂夫·乔布斯'

            },
            {
                id:"0005",
                avatar:{
                    background:'url("../../../../static/image/avator5.jpg")',
                    backgroundSize:'cover'
                    },
                name:'GJ',
                time:'06:19',
                talk:'在一个信息爆炸却多半无用的时代,准确识别、形成清晰的见解就成了一种能力',
                quote:'他们的问题绝不是一本书所能解答的,我对于处在这些情景的人也提不出什么高见,反而可能要向他们学习',
                cover:'../../../../static/image/item2.png',
                bookname:'今日简史',
                autor:'尤瓦尔·赫拉利'

            }
           ]
        }
    },
}

</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
    .discuss
        position absolute
        top 8rem
        width 100%
        background #F5F5F5
        font-size .24rem
        padding-bottom 1.2rem
        .discuss-item
            overflow hidden
            padding .2rem
            margin-top .2rem
            background #fff
            .item-top
                height .8rem
                line-height .8rem
                .item-avator
                    float left
                    display inline-block
                    width .6rem
                    height .6rem
                    border-radius 50%
                .item-name
                    margin-left .2rem
                    float left    
                .item-time
                    float right 
            .item-bottom
                margin-left .6rem
                .item-talk
                    height .8rem
                    line-height .4rem
                    ellipsis()
                    -webkit-line-clamp 2
                    margin .4rem 0
                .item-detail
                    padding .2rem
                    background #DCDCDC
                    border-radius .2rem
                    .item-quote
                        height 1.2rem
                        line-height .4rem
                        ellipsis()
                        -webkit-line-clamp 3
                    .item-book-detail
                        display flex
                        margin-top .4rem
                        .item-book-cover-box
                            flex 2
                            height 1.5rem
                            .item-book-cover
                                width auto
                                height auto 
                                max-width 100%
                                max-height 100%
                        .item-column
                            flex 7
                            line-height .5rem
                .item-icon
                    width 100%
                    margin-top .2rem
                    display flex
                    justify-content space-between
                    span 
                        display inline-block
                        flex 1
                        text-align center  
                        font-size .4rem 






                        





</style>