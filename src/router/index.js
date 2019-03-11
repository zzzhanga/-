import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/pages/find/Find'
import Book from '@/pages/bookshelf/Bookshelf'
import Idea from '@/pages/idea/Idea'
import Mine from '@/pages/mine/Mine'
import Like from '@/pages/find/like/Like'
import Detail from '@/pages/find/detail/Detail'
import BookDetail from '@/pages/bookshelf/bookdetail'
import IdeaWrite from '@/pages/idea/ideawrite'
import Listener from '@/components/listener'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component: Find
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/idea',
      name: 'Idea',
      component: Idea
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/like',
      name: 'Like',
      component: Like
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/bookdetail/:id',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/ideawrite',
      name: 'IdeaWrite',
      component: IdeaWrite
    },
    {
      path: '/listener',
      name: 'Listener',
      component: Listener
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
