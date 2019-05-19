<!--  -->
<template>
  <div>
    <div class="book-text" ref="wrapper">
      <cube-scroll ref="scroll" :options="options">
        <div v-for="item of this.bookTxt" :key="item.id">
          <header class="header border">
            <div class="header-img">
              <img :src="item.img" alt>
            </div>
            <p class="name">{{item.name}}</p>
            <p class="autor">{{item.autor}}</p>
          </header>
          <section class="rating">
            <div class="rating-detail">
              <div class="detail-left">
                <p class="left-one">
                  <span class="num">{{item.num}}</span>
                  <span class="grade">{{item.grade}}</span>
                </p>
                <p class="review">{{item.review}}</p>
              </div>
              <div class="detail-right">
                <p class="right-one">
                  <span class="peoplenum">{{item.peoplenum}}</span>
                  <span class="unit">{{item.unit}}</span>
                </p>
                <p class="read">{{item.read}}</p>
              </div>
            </div>
            <div class="profile">
              <h3>{{item.title}}</h3>
              <p class="profile-content">{{item.profile}}</p>
              <h4>第一章</h4>
              <div class="neirong">{{item.content}}</div>
            </div>
          </section>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'bookdetail',
  data () {
    return {
      bookTxt: []
    }
  },
  computed: {
    options () {
      return {
        bounce: {
          top: false,
          bottom: false,
          left: false,
          right: false
        }
      }
    }
  },
  methods: {
    getDetailInfo () {
      axios
        .get('/static/mock/book.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bookTxt = data.bookTxt
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'

.book-text
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index 2
  overflow: hidden
  .header
    background: #ebe5b7
    padding: 0.6rem 1rem
    .header-img
      height: 4rem
      display: flex
      justify-content: center
      img
        width: auto
        height: auto
        max-width: 100%
        max-height: 100%
    .name, .autor
      margin-top: 0.4rem
      text-align: center
      font-weight: 500
    .autor
      font-size: 0.22rem
      color: #b69058
  .rating
    background: #f5efb9

    .rating-detail
      height: 1rem
      padding: 0.4rem
      display: flex
      justify-content: space-around
      .detail-left
        flex: 1
        .left-one
          .num
            font-size: 0.4rem
        .review
          margin-top: 0.2rem
          font-size: 0.2rem
          color: #666
      .detail-right
        flex: 1

        .right-one
          .peoplenum
            font-size: 0.4rem
        .read
          margin-top: 0.2rem
          font-size: 0.2rem
          color: #666
    .profile
      margin-top: 0.4rem
      line-height: 0.5rem
      padding: 0.2rem 0.4rem 2rem 0.4rem
      h3
        font-size: 0.32rem
      .profile-content
        -webkit-line-clamp: 8
        ellipsis()
      h4
        margin-top: 1rem
      .neirong
        text-indent: 0.6rem
        padding-top: 0.8rem
</style>
