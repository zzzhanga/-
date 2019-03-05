<template>
  <div class="card">
      <swiper :options="swiperOption">
        <swiper-slide 
            class="slide-card"
            v-for="item of swiperList" 
            :key="item.id">
            <router-link tag="img" to="/detail" class="swiper-img" :src="item.imgUrl"></router-link>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    name: "FindCard",
    data() {
        return {
           swiperOption:{
               loop: true
           },
           swiperList:[{
               id:'0001',
               imgUrl:'../../../../static/image/banner1.png'
           },
           {
               id:'0002',
               imgUrl:'../../../../static/image/banner2.png'
           },
           {
               id:'0003',
               imgUrl:'../../../../static/image/banner3.png'
           },
           {
               id:'0004',
               imgUrl:'../../../../static/image/banner4.png'
           },
           {
               id:'0005',
               imgUrl:'../../../../static/image/banner5.png'
           }] 
        }
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