<!--  -->
<template>
  <div>
      <footer class="footer border-top">
          <span @click="goTo">{{listening}}</span>
          <router-link to='/bookdetail/0001'>{{free}}</router-link>
          <router-link to='/book'>{{join}}</router-link>
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
    },
    methods: {
        goTo(){
            this.$router.push('/listener')
        }
    }
}

</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .footer
        position absolute
        bottom 0
        z-index 2
        display flex
        justify-content space-between
        align-items center
        width 100%
        height .8rem
        background #fff
        a,
        span
            flex 1
            display inline-block
            text-align center
            color $Color
</style>