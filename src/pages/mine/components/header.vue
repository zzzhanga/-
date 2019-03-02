<!--  -->
<template>
  <div>
      <header class="mine-header">
        <span class="iconfont">&#xe623;</span>
        <span>{{this.name}}</span>
        <span class="iconfont">&#xe632;</span>
      </header>
  </div>
</template>

<script>
export default {
    name: "MineHeader",
    data () {
        return {
                name:'沧海的雨季',
        };
    }
}

</script>
<style  lang="stylus" scoped>
    .mine-header
        position fixed
        top 0
        display flex
        justify-content space-between
        width 100%
        height 1rem
        line-height 1rem
        box-sizing border-box
        background #fff
        font-size .24rem
    .mine-header span:nth-child(1)
        padding-left .4rem
        font-size .36rem
    .mine-header span:nth-child(3)   
        padding-right .4rem  
        font-size .36rem   
        

</style>