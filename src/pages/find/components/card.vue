<template>
  <div class="card">
      <swiper :options="swiperOption" v-if="cardItem.length">
        <swiper-slide 
            class="slide-card"
            v-for="item of cardItem" 
            :key="item.id">
            <router-link tag="img" to="/detail" class="swiper-img" :src="item.imgUrl"></router-link>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    name: "FindCard",
    props:{
        cardItem: Array
    },
    data() {
        return {
           swiperOption:{
               loop: true
           }
        }
    }
   
}
</script>
<style lang="stylus" scoped>
    .slide-card
        overflow hidden
        width 100%
        height 11rem
        display flex
        justify-content center
        .swiper-img
            width auto
            height auto
            max-width 100%
            max-height 100%
            

</style>