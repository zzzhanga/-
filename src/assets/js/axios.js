import axios from 'axios'

const pull = {
  data () {
    return {
      options: {
        pullUpLoad: true
      }
    }
  }
}

const FindMixin = {
  methods: {
    getFindInfo () {
      axios
        .get('/static/mock/find.json')
        .then(this.getFindInfoSucc, this.getFindInfoFailed)
    },
    getFindInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cardItem = data.cardItem
        this.detailList = data.detailList
        this.detailItem = data.detailItem
        this.songs = data.listenerItem
        this.guessItem = data.guessItem
        this.Items = data.Items
        this.Title = data.Title
      }
    }
  }
}

const BookMixin = {
  methods: {
    getBookInfo () {
      axios.get('/static/mock/book.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getBookInfoSucc)
    },
    getBookInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.booklist = data.booklist
        this.bookTxt = data.bookTxt
      }
    }
  }
}

const IdeaMixin = {
  methods: {
    getIdeaInfo () {
      axios.get('/static/mock/idea.json').then(this.getIdeaInfoSucc)
    },
    getIdeaInfoSucc (res) {
      let i = Math.floor(Math.random() * 9)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.message = data.message.splice(i, 3)
        this.speak = data.items.splice(0, 5)
        this.items = data.items
      }
    }
  }
}

const MineMixin = {
  methods: {
    getMineInfo () {
      axios.get('/static/mock/mine.json').then(this.getMineInfoSucc)
    },
    getMineInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.imgUrl = data.imgUrl
        this.signature = data.signature
      }
    }
  }
}

export {
  pull,
  FindMixin,
  BookMixin,
  IdeaMixin,
  MineMixin
}
