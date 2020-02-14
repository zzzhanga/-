<template>
  <swiper :options="swiperOptions" class="swiper">
      <swiper-slide class="swiper-slide" :class="'slide'+index" v-for="(item, index) of cardItem" :key="index">
        <img v-if="index==0" class="title" src="/static/image/find-banner/title.png">
        <template v-for="(childItem, idx) of item">
          <router-link class="cardItem" :to="childItem.linkUrl" :key="idx">
            <img class="swiper-img" :src="childItem.imgUrl">
          </router-link>
        </template>
      </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'FindCard',
  props: {
    cardItem: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        initialSlide: 1
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper-slide
  height 74vh
  box-sizing border-box

.cardItem
  width 100%
  height 100%
  display flex
  justify-content center
  img
    width auto
    height auto
    max-width 100%
    max-height 100%

.slide0
  padding 1rem 1rem 0rem 1rem
.slide0 .cardItem
  width auto
  height auto
  margin 10px 0
  border-radius 10px
  img
    width 364px
    height auto
</style>
