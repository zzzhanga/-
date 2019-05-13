<template>
  <div class="header">
    <div class="mine-navbar">
      <div class="mine-navbar-left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="mine-navbar-center" v-if="$slots.center">
        <slot name="center"></slot>
      </div>
      <div class="mine-navbar-right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
      <h1 class="mine-navbar-title" v-if="title">
        <span class="mine-navbar-text" v-text="title"></span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    toLink () {
      window.location.href = this.url
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl';

.mine-navbar {
  position: relative;
  flex-between();
  height: 8vh;
  background-color: #fff;

  &-left {
    margin-left: 0.4rem;

    ~.mine-navbar-right {
      position: static;
    }
  }

  &-center {
    flex: 1;
    margin: 0 0.4rem;

    ~.mine-navbar-right {
      position: static;
    }
  }

  &-right {
    margin-right: 0.4rem;
    position: absolute;
    right: 0;
    flex-center();
    height: 100%;
  }

  &-title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20%;
    right: 20%;
    flex-center();
    text-align: center;
  }

  &-text {
    width: 100%;
    line-height: 1.5;
    font-size: 0.36rem;
    -webkit-line-clamp: 1;
    ellipsis();
  }
}
</style>
