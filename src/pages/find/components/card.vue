<template>
  <cube-slide ref="slide" :data="cardItem" :loop="true" :auto-play="false" :showDots="false">
    <cube-slide-item class="slide-card" v-for="(item, index) in cardItem" :key="index">
      <router-link :to="item.linkUrl">
        <img class="swiper-img" :src="item.imgUrl">
      </router-link>
    </cube-slide-item>
  </cube-slide>
</template>

<script>
export default {
  name: 'FindCard',
  props: {
    cardItem: Array
  }
}
</script>
<style lang="stylus" scoped>
.slide-card {
  height: 84vh;
  display: flex;
  justify-content: center;

  .swiper-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
