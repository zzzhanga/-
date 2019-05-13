<template>
  <div class="discuss">
    <div class="discuss-item" v-for="(item ,index) of speak" :key="item.id">
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
              <img class="item-book-cover" :src="item.cover" alt>
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
        <div class="speak-box">
          <ul>
            <li class="speak-items" v-for="lis of speak[index].speak" :key="lis.id">
              <span class="speak-name">{{lis.name}}</span>
              <span class="speak-talk">{{lis.talk}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Discuss',
  props: {
    speak: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl';

.discuss
    background #F5F5F5
    font-size .24rem
    line-height 1.5
    .discuss-item
        overflow hidden
        padding .2rem
        margin-top .2rem
        background #fff
        .item-top
            line-height .8rem
            .item-avator
                display inline-block
                vertical-align middle
                width .6rem
                height .6rem
                border-radius 50%
            .item-name
                margin-left .2rem
            .item-time
                float right
        .item-bottom
            margin-left .6rem
            .item-talk
                ellipsis()
                -webkit-line-clamp 2
                margin .2rem 0
            .item-detail
                padding .2rem
                background #DCDCDC
                border-radius .2rem
                .item-quote
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
                display flex
                justify-content space-between
                span
                    flex 1
                    font-size .4rem
                    text-align center
            .speak-box
                background #f5f5f5
                padding .2rem
                .speak-items
                    margin-top .24rem
                    .speak-name
                        color #09c
</style>
