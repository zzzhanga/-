<template>
  <div class="card">
    <swiper :options="swiperOption" v-if="cardItem.length">
      <swiper-slide class="slide-card" v-for="item of cardItem" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" @click="goTo" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "FindCard",
  props: {
    cardItem: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
      }
    };
  },
  methods: {
    goTo(){
      this.$router.push('/detail')
    }
  }
};
</script>
<style lang="stylus" scoped>
.slide-card 
  height: 80vh;
  display flex
  justify-content center
  .swiper-img 
    width auto
    height auto
    max-width 100%
    max-height 100%
</style>