<template>
  <div>
    <div class="find">
      <search class="header" v-show="visible">
        <router-link class="iconfont search" slot="left" to="find/like">&#xe634;</router-link>
        <router-link class="icon-center" slot="center" to="find/like">三体</router-link>
        <i class="icon-right" slot="right">|&nbsp;&nbsp;书城</i>
      </search>
      <find-card :cardItem.sync="cardItem"></find-card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './../../components/Search'
import FindCard from './components/card'
import {FindMixin} from '../../assets/js/axios'
export default {
  name: 'Find',
  mixins: [FindMixin],
  data () {
    return {
      cardItem: [],
      msg: '',
      visible: true
    }
  },
  components: {
    Search,
    FindCard
  },
  methods: {
    // API
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  },
  mounted () {
    this.getFindInfo()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/variable.styl'
.header >>> .mine-navbar
  height: 0.8rem
  border: 1px solid #ccc
  border-radius: 0.8rem
.header
  margin: 0.2rem 0.4rem
.iconfont
  color: #ccc
  font-size: 0.32rem
.icon-center
  display: block
  width: 100%
  line-height: 1rem
.icon-right
  color: $theme-color
</style>
