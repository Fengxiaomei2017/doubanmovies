<template>
<div class="douban-wrapper">
  <scroll-y class="scrollY-wrapper" :data="scrollNewMovies">
    <div class="big-wrapper">
      <div class="movies-title">
        <div class="more" @click="moreHot">更多</div>
        <div class="Title">影院热映</div>
      </div>
      <div class="movies-scroll">
      <!-- 重要！处理异步数据时（解决当数据还没有取到的时候就执行了后面的操作） -->
        <div v-if="scrollHotMovies.length">
          <scroll>
            <div v-for="item in scrollHotMovies">
              <a :href="item.URL">
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
        <div class="Title">免费在线观影</div>
      </div>
      <div class="movies-scroll">
      <!-- 重要！处理异步数据时（解决当数据还没有取到的时候就执行了后面的操作） -->
        <div v-if="scrollFreeMovies.length">
          <scroll>
            <div v-for="item in scrollFreeMovies">
              <a :href="item.URL">
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
        <div class="more"><router-link tag="div" to="/movies/morenewmovies">更多</router-link></div>
        <div class="Title">新片速递</div>
      </div>
      <div class="movies-scroll">
      <!-- 重要！处理异步数据时（解决当数据还没有取到的时候就执行了后面的操作） -->
        <div v-if="scrollNewMovies.length">
          <scroll>
            <div v-for="item in scrollNewMovies">
              <a :href="item.URL">
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
      <footer-view></footer-view>
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
import {getHotMoviesList, getFreeMoviesList, getNewMoviesList, getMoviesList} from '@/api/movies.js'
export default{
  props: {
    data: {
      
    }
  }
  data () {
    return {
      scrollHotMovies: [],
      scrollFreeMovies: [],
      scrollNewMovies: []
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
        width: 150px
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