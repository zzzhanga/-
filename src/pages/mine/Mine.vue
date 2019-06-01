<!--  -->
<template>
  <div>
    <search class="mine-header">
      <span class="iconfont" slot="left">&#xe623;</span>
      <span slot="center">{{this.name}}</span>
      <span slot="right" class="iconfont" @click="goSetting">&#xe632;</span>
    </search>
    <div class="wrapper">
      <cube-scroll ref="scroll">
        <mine-info :signature="signature" :imgUrl="imgUrl"></mine-info>
        <information-bar></information-bar>
      </cube-scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './../../components/Search'
import MineInfo from './components/info'
import InformationBar from './components/InformationBar'
import {MineMixin} from '../../assets/js/axios'
export default {
  name: 'Mine',
  mixins: [MineMixin],
  data () {
    return {
      imgUrl: '',
      signature: '',
      name: '沧海的雨季',
      visible: true
    }
  },
  components: {
    Search,
    MineInfo,
    InformationBar
  },
  methods: {
    goSetting () {
      this.$router.push('/mine/setting')
    }
  },
  mounted () {
    this.getMineInfo()
  }
}
</script>
<style lang='stylus' scoped>
.mine-header >>> .mine-navbar-center
  text-align: center

.wrapper
  position: absolute
  top: 8vh
  left: 0
  right: 0
  bottom: 0
  overflow: hidden

</style>
