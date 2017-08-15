import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/movies/movies.vue'
import Books from '@/components/books/books.vue'
import Radio from '@/components/radio/radio.vue'
import Group from '@/components/group/group.vue'
import Search from '@/components/search/search.vue'
import MoreHotMovies from '@/components/more-movies/more-hotmovies.vue'
import MoreFreeMovies from '@/components/more-movies/more-freemovies.vue'
import MoreNewMovies from '@/components/more-movies/more-newmovies.vue'
import MoviesDetail from '@/components/movies-detail/movies-detail.vue'

Vue.use(Router)

// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      component: Movies,
      children: [
        {
          path: ':id',
          component: MoviesDetail
        },
        {
          path: 'morehotmovies',
          component: MoreHotMovies
        },
        {
          path: 'morefreemovies',
          component: MoreFreeMovies
        },
        {
          path: 'morenewmovies',
          component: MoreNewMovies
        }
      ]
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
