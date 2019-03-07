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
    },
    mounted() {
        console.log(this.cardItem)
    },
   
}
</script>
<style lang="stylus" scoped>
    .card
        overflow hidden
        width 100%
        height 11rem
        .swiper-img
            width 100%
            

</style>