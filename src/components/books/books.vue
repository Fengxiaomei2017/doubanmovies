<template>
<div class="douban-wrapper">
  <scroll-y class="scrollY-wrapper" :data="booksReal">
    <div class="big-wrapper">
      <div class="movies-title">
        <div class="more" @click="moreHot">更多</div>
        <div class="Title">
          <span>最受关注图书</span>
          <span></span>
          <span>虚构类</span>
        </div>
      </div>
      <div class="movies-scroll">
        <div v-if="booksNotReal.length">
          <scroll>
            <div v-for="item in booksNotReal">
              <a>
                <img width="100" v-lazy="item.picUrl" alt="海报">
                <span>{{item.title}}</span>
                <div>
                  <star v-if="item.rating!==null" :size="24" :score="item.rating.value"></star>
                  <div v-show="item.rating===null">暂无评分</div>
                </div>
              </a>
            </div>
          </scroll>
        </div>
      </div>
      <div class="movies-title">
        <div class="more"><router-link tag="div" to="/movies/morefreemovies">更多</router-link></div>
        <div class="Title">
          <span>最受关注图书</span>
          <span></span>
          <span>非虚构类</span>
        </div>
      </div>
      <div class="movies-scroll">
        <div v-if="booksReal.length">
          <scroll>
            <div v-for="item in booksReal">
              <a>
                <img width="100" v-lazy="item.picUrl" alt="海报">
                <span>{{item.title}}</span>
                <div>
                  <star v-if="item.rating!==null" :size="24" :score="item.rating.value"></star>
                  <div v-show="item.rating===null">暂无评分</div>
                </div>
              </a>
            </div>
          </scroll>
        </div>
      </div>
      <footer-view :find="find" :contain="contain" :sort="sort"></footer-view>
    </div>
  </scroll-y>
  <router-view></router-view>
</div>
</template>
<script>
import Scroll from '@/base/scroll/scroll.vue'
import ScrollY from '@/base/scroll-y/scroll-y.vue'
import Star from '@/base/star/star.vue'
import FooterView from '../footer/footer.vue'
import {getBooksNotReal, getBooksReal} from '@/api/books.js'
import {getMoviesList} from '@/api/movies.js'
const ERR_OK = 0
export default{
  data () {
    return {
      booksNotReal: [],
      booksReal: [],
      find: {},
      contain: [],
      sort: {}
    }
  },
  created () {
    this._getBooksNotReal()
    this._getBooksReal()
    this.$http.get('/api/findBooks').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.find = response.data
        this.contain = this.find.contain
      }
    })
    this.$http.get('/api/sortBooks').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.sort = response.data
      }
    })
  },
  methods: {
    moreHot () {
      // 编程式跳转接口
      this.$router.push({
        path: `/movies/morehotmovies`
      })
    },
    _getBooksNotReal () {
      getBooksNotReal().then((res) => {
        let booksList = getMoviesList(res.subject_collection_items)
        this.booksNotReal = this._copy(booksList)
      })
    },
    _getBooksReal () {
      getBooksReal().then((res) => {
        let booksListR = getMoviesList(res.subject_collection_items)
        this.booksReal = this._copy(booksListR)
      })
    },
    // 复制前八个
    _copy (list) {
      return list.slice(0, 8)
    }
  },
  components: {
    Scroll,
    Star,
    FooterView,
    ScrollY
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/diff.styl"

.douban-wrapper{
  position: fixed
  width: 100%
  top: 50px
  left: 0
  bottom: 0
  overflow: hidden
}
  .scrollY-wrapper{
    position: relative
    width: 100%
    height: 100%
    // overflow: hidden
  }
    .movies-title{
      position: relative
      margin-top: 10px
      width: 100%
      height: 40px
      line-height: 30px
      padding: 0 5px
      font-size: 0
    }
      .more{
        float: right
        margin-right: 15px
        font-size: 17px
        color: #05B512
      }
      .Title{
        float: left
        margin-left: 8px
        width: 300px
        font-size: 17px
        color: black
      }
    .movies-scroll{
      position: relative
      width: 100%
      margin-bottom: 20px
      overflow: hidden
    }
</style>