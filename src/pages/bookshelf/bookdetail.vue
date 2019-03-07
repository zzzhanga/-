<!--  -->
<template>
          <div class="book-detail" ref="wrapper">
            <div>
                <header class="header border">
                  <div class="header-img">
                    <img :src="img" alt="">
                  </div>
                  <p class="name">{{name}}</p>
                  <p class="autor">{{autor}}</p>
                </header>
                <section class="rating">
                    <div class="rating-detail">
                        <div class="detail-left">
                          <p class="left-one"><span class="num">{{num}}</span> <span class="grade">{{grade}}</span></p>
                          <p class="review">{{review}}</p>
                        </div>
                        <div class="detail-right">
                          <p class="right-one"><span class="peoplenum">{{peoplenum}}</span> <span class="unit">{{unit}}</span></p>
                          <p class="read">{{read}}</p>
                        </div>
                    </div>
                    <div class="profile">
                      <h3>{{title}}</h3>
                      <p class="profile-content">{{profile}}</p>
                      <h4>第一章</h4>
                      <div class="neirong">一位艺术家不可能一天二十四小时都处于艺术创作之中，而灵感突发时刻所创造的一切，往往才是最重要的，才是永恒的。历史，向来被称作所有时代中最伟大的诗人和演员，它并不是时刻不停地进行新的创造。歌德曾经怀着深深的敬意将历史称作“上帝神秘的作坊”，而许许多多微乎其微的事情都发生在这个作坊里。像在生活中和艺术里遇到的情况一样，这里发生的那些令人难以忘怀的关键时刻至为罕见。所有历史上的关键性时刻都需要时间的运作，每一个重要事件都会有一个发展过程。因此，历史平时也只能犹如编年史学家般将大小事件一一连接起来，再环环相扣，连接成一条长达数千年的链条。在一个民族里，几百万人中才能产生一位天才。在历史的长河中最具关键意义的时刻，一个耀眼星光闪现之前，人类要经历漫长的岁月。
                          在艺术上如果出现了一位天才，那就肯定会流芳百世；而具备世界历史意义的关键时刻一旦发生，那将会产生几十年甚至几百年的影响。像避雷针尖端汇聚大气层云海的电流一般，许许多多的事情都集中在很短的时间内发生。在平时，一些事情似乎都有顺序地或者同时在发生着，但最终表现出来会在一个决定一切的短暂时刻：往往只需要一个“行”字或者“不”字，或许是早一秒，或许是晚一秒，将这个划时代的时刻永留在历史瞬间。而决定一人的生死、一个民族的存亡，以至于和人类的命运息息相关的，也正在这一关键时刻。
                          一个决定，即便其中蕴含的意义再深远，它也需要在一个特定的时刻去做，有可能是某一小时，甚至是某一分钟。而这个充满戏剧性、生死攸关的重要时刻，在人们生活中、在人类历史的长河里都是非常罕见的。在这本书里，我将从不同的时代、不同的地域搜寻一些人类历史中曾经星光灿烂的时刻，它们曾经像耀眼的星光在夜空闪现，将漆黑的夜空瞬间照亮，驱散了人类幽暗的长夜。我没有对书中叙述的事件和许多人物心理的真实性予以淡化或者强化，因为历史绝对是事先已经完美地发生过的，那些绝妙的时刻根本无须别人的渲染。历史才是真正伟大的诗人、作家，它是任何诗人都无法比拟的。
                          ——斯蒂芬·茨威格
                    </div>
                    </div>
                </section>
              </div>
          </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      img:'../../../static/image/detail1.png',
      name:'人类群星闪耀时',
      autor:'斯蒂芬·茨威格',
      num:'7.6',
      grade:'★★★★☆',
      review:'222人点评 >',
      peoplenum:'4077',
      unit:'人',
      read:'阅读此书 >',
      title:'简介',
      profile:'没有哪一位艺术家能在全天二十四个小时里不间断的创作艺术.他们成功完成的那些关键性的,具有恒久意义的作品,都出现在为数不多儿难得一见的灵感降临瞬间.历史也是如此:我们敬慕一切时代中最伟大的诗人和表演艺术家,但是她也绝不是以为永无闲歇的创造者.歌德曾经充满敬畏的将历史称为"上帝的满是秘密的作坊"--即便在这个作坊里,无关紧要和日常繁琐之事也是无尽无休.在这里如同在艺术和生活的各种领域一样,那种精致的、令人难忘的时刻难得一见.大多时候,历史是一位编年记录人,她心思冷淡却持之以恒的将一个个环套编成一个巨大的链条--这链条延伸几千年,在他上面'
    };
  },
  mounted() {
    this.scroll=new Bscroll(this.$refs.wrapper)
  },
}

</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
    .book-detail
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      overflow hidden
      .header
        background #ebe5b7
        padding .6rem 1rem
        .header-img
          height 4rem
          display flex
          justify-content center
          img 
            width auto 
            height auto 
            max-width 100%
            max-height 100%
        .name,.autor
          margin-top .4rem
          text-align center
          font-weight 500
        .autor
          font-size .22rem
          color #b69058
      .rating
        background #f5efb9
        .rating-detail
          height 1rem
          padding .4rem
          display flex
          justify-content space-around
          .detail-left 
            flex 1
            .left-one
              .num
                font-size .4rem
            .review
                margin-top .2rem
                font-size .2rem
                color #666
          .detail-right 
            flex 1
            .right-one
              .peoplenum
                font-size .4rem
            .read
                margin-top .2rem
                font-size .2rem
                color #666
        .profile
          margin-top .4rem
          line-height .5rem
          padding .2rem .4rem 2rem .4rem
          h3
            font-size .32rem  
          .profile-content
            -webkit-line-clamp 8
            ellipsis()
          h4
            margin-top 1rem
          .neirong
            text-indent .6rem
            padding-top .8rem




</style>