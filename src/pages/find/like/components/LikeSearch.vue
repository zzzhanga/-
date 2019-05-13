<template>
  <div>
    <header class="head">
      <i class="cubeic-back" @click="goBack"></i>
      <search class="header" v-show="visible">
        <span class="cubeic-search" slot="left"></span>
        <input
          type="text"
          class="icon-center"
          slot="center"
          placeholder="三体"
          v-model="key"
          @keyup.13="show($event)"
        >
      </search>
    </header>
    <div class="search-content" ref="search" v-show="key">
      <cube-scroll ref="scroll">
        <ul>
          <li class="search-item border-bottom" v-for="item of list" :key="item.id">
            <img :src="item.img" alt>
          </li>
          <div class="search-item border-bottom-1px none" v-show="hasData">
            <p class="none">没有找到相关的书籍</p>
          </div>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import Search from './../../../../components/Search'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  name: 'FindHeader',
  data () {
    return {
      key: '',
      Title: [],
      list: [],
      timer: null,
      visible: true
    }
  },
  components: {
    Search
  },
  computed: {
    // 如果没有搜到数据,显示没有相关的书籍.有数据的话就不显示
    hasData () {
      return !this.list.length
    }
  },
  methods: {
    goBack () {
      this.$router.history.go(-1)
    },
    show (ev) {
      // 传递key值,因为历史记录里要用
      this.setKeyWord(this.key)
      this.key = ''
    },
    // 请求ajax
    getFindInfo () {
      axios.get('/static/mock/find.json').then(this.getFindInfoSucc)
    },
    // 获取服务端数据
    getFindInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.Title = data.Title
      }
    },
    ...mapMutations({
      setKeyWord: 'SET_KEY_WORD'
    })
  },
  mounted () {
    // 调用ajax
    this.getFindInfo()
  },
  watch: {
    // 检测输入值变化
    key () {
      // 有定时器先清除
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 没有key值情况搜索内容
      if (!this.key) {
        this.list = []
        return
      }
      // 定时,因为用户输入过快,所以使用事件节流
      this.timer = setTimeout(() => {
        const result = []
        // 循环所有搜索资源
        for (let i in this.Title) {
          // 循环资源中的每一项
          this.Title[i].forEach(value => {
            // 检测资源中的拼音和书名  如果能找到就把它添加到数组
            if (
              value.spell.indexOf(this.key) > -1 ||
              value.name.indexOf(this.key) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl';

.header >>> .mine-navbar {
  width: 100%;
  border-radius: 0.8rem;
  background: #f5f5f5;
  height: 0.6rem;
}

.head {
  margin-top: 0.2rem;
  display: flex;
  overflow: hidden;

  .cubeic-back {
    font-size: 0.5rem;
    line-height: 0.6rem;
    color: #999;
    margin: 0 0.2rem;
  }

  .header {
    flex: 1;
    display: flex;
    float: right;
    border: 1px solid #ccc;
    border-radius: 1rem;
    margin-right: 0.2rem;

    .icon-center {
      background: #f5f5f5;
    }

    .cubeic-search {
      font-size: 0.4rem;
      color: #999;
    }
  }
}

.search-content {
  z-index: 2;
  line-height: 1rem;
  min-height: 99vh;
  background: #fff;
}

.search-item {
  margin-top: 0.4rem;
  text-indent: 0.1rem;

  img {
    width: auto;
    max-width: 100%;
  }
}

.none {
  color: $Color;
  font-size: 0.24rem;
  width: 100%;
  text-align: center;
  line-height: 1rem;
}
</style>
