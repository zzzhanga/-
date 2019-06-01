<!--  -->
<template>
  <div>
    <div class="book-content" v-if="booklist.length">
      <div
        tag="div"
        class="book-item"
        v-for="item in booklist"
        :key="item.id"
        @click="selectItem(item)"
      >
        <img class="book-cover" :src="item.imgUrl">
        <p class="book-text">{{item.txt}}</p>
      </div>
      <p class="item-bottom">{{this.public}}本公开阅读 · {{this.Private}}本私密阅读</p>
    </div>
    <cube-loading class="loading" v-else :size="40"></cube-loading>
  </div>
</template>

<script>
// import storage from '../../../assets/js/storage.js'
// import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './../components/config.js'
import {mapMutations} from 'vuex'

export default {
  name: 'BookSearch',
  props: {
    booklist: Array
  },
  data () {
    return {
      public: '142',
      Private: '2'
    }
  },
  methods: {
    selectItem (item) {
      console.log(item.id)
      this.$router.replace({
        path: `/book/${item.id}`
      })
      this.playing(false)
    },
    ...mapMutations({
      playing: 'SET_PLAYING_STATE'
    })
  }
  // methods: {
  //   getContent (id) {
  //     let contents = storage.get(CATEGORY_CONTENT_KEY)
  //     let updateTime
  //     const curTime = new Date().getTime()

  //     if (contents) {
  //       updateTime = contents[id].updateTime || 0
  //       if (curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) {
  //         return this.getContentByLocalStorage(contents[id])
  //       } else {
  //         return this.getContentByHTTP(id).then(() => {
  //           this.updateLocalStorage(contents, id, curTime)
  //         })
  //       }
  //     } else {
  //       return this.getContentByHTTP(id).then(() => {
  //         this.updateLocalStorage(contents, id, curTime)
  //       })
  //     }
  //   },
  //   updateLocalStorage (contents, id, curTime) {
  //     contents = contents || {}
  //     contents[id] = {}
  //     contents[id].data = this.content
  //     contents[id].updateTime = curTime
  //     storage.set(CATEGORY_CONTENT_KEY, contents)
  //   },
  //   getContentByLocalStorage (content) {
  //     this.content = content.data
  //     return Promise.resolve()
  //   },
  //   getContentByHTTP (id) {
  //     // return getCategoryContent(id).then(data => {
  //     //   return new Promise(resolve => {
  //     //     if (data) {
  //     //       this.content = data
  //     //       resolve()
  //     //     }
  //     //   })
  //     // })
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
.loading
  display: flex
  height: 10rem
  justify-content: center
  align-items: center
.book-content
  margin: 0.2rem 0.2rem 3rem 0.2rem
  width: 100%
  overflow: hidden
  .book-item
    position: relative
    display: inline-block
    float: left
    margin: 0.2rem 0.2rem 0.4rem 0.2rem
    width: 26%
    height: 0
    padding-bottom: 45%
    overflow: hidden
    .book-cover
      position: absolute
      top: 0
      width: 100%
      border: 0.02rem solid #ccc
    .book-text
      position: absolute
      bottom: 0
      width: 100%
      text-align: center
      line-height: 0.3rem
      font-size: 0.16rem
  .item-bottom
    float: left
    width: 100%
    font-size: 0.24rem
    color: #ccc
    text-align: center
</style>
