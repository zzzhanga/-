import Vue from 'vue'
import Router from 'vue-router'
const FIND = () => import('@/pages/find/Find')
const BOOK = () => import('@/pages/bookshelf/Bookshelf')
const IDEA = () => import('@/pages/idea/Idea')
const MINE = () => import('@/pages/mine/Mine')
const LIKE = () => import('@/pages/find/like/Like')
const DETAIL = () => import('@/pages/find/detail/Detail')
const BOOKDETAIL = () => import('@/pages/bookshelf/bookdetail')
const IDEAWRITE = () => import('@/pages/idea/ideawrite')
const LISTENER = () => import('@/components/listener')
const SETTING = () => import('@/pages/mine/setting/setting')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      name: 'FIND',
      component: FIND,
      children: [
        {
          path: 'like',
          name: 'Like',
          component: LIKE
        },
        {
          path: 'detail',
          name: 'Detail',
          component: DETAIL
        }
      ]
    },
    {
      path: '/book',
      name: 'Book',
      component: BOOK,
      children: [
        {
          path: ':id',
          name: 'BookDetail',
          component: BOOKDETAIL
        }
      ]
    },
    {
      path: '/idea',
      name: 'Idea',
      component: IDEA,
      children: [
        {
          path: 'ideawrite',
          name: 'IdeaWrite',
          component: IDEAWRITE
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: MINE,
      children: [
        {
          path: 'setting',
          name: 'Setting',
          component: SETTING
        }
      ]
    },
    {
      path: '/listener',
      name: 'Listener',
      component: LISTENER
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
