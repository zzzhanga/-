import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component:() => import('@/pages/find/Find')
    },
    {
      path: '/book',
      name: 'Book',
      component: () => import('@/pages/bookshelf/Bookshelf')
    },
    {
      path: '/idea',
      name: 'Idea',
      component: () => import('@/pages/idea/Idea')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@/pages/mine/Mine')
    },
    {
      path: '/like',
      name: 'Like',
      component: () => import('@/pages/find/like/Like')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/pages/find/detail/Detail')
    },
    {
      path: '/bookdetail/:id',
      name: 'BookDetail',
      component: () => import('@/pages/bookshelf/bookdetail')
    },
    {
      path: '/ideawrite',
      name: 'IdeaWrite',
      component: () => import('@/pages/idea/ideawrite')
    },
    {
      path: '/listener',
      name: 'Listener',
      component: () => import('@/components/listener')
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/pages/mine/setting/setting')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
