<!--  -->
<template>
  <div>
      <footer class="footer border-top">
          <router-link to='/' tag="span">{{listening}}</router-link>
          <router-link to='/' tag="span">{{free}}</router-link>
          <router-link to='/' tag="span">{{join}}</router-link>
      </footer>
  </div>
</template>

<script>
export default {
    name:'DetailBar',
    data () {
        return {
            listening:'听书',
            free:'免费阅读',
            join:'加入书架'
        };
    }
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .footer
        position fixed
        bottom 0
        z-index 2
        display flex
        justify-content space-between
        align-items center
        width 100%
        height .8rem
        background #fff
        span 
            flex 1
            display inline-block
            text-align center
            color $Color
</style>