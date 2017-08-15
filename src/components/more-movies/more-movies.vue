<template>
  <scroll-y class="more-movies" :data="moviesList">
    <div>
      <div class="title">
        <h1>{{name}}</h1>
      </div>
      <ul v-if="moviesList.length">
        <li class="moviesList" v-for="item in moviesList">
          <a href="javascript:">
            <img width="100" v-lazy="item.picUrl" alt="海报">
            <span class="name">{{item.title}}</span>
            <div class="rating">
              <star v-if="item.rating!==null" :size="24" :score="item.rating.value"></star>
              <div v-show="item.rating===null">暂无评分</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </scroll-y>
</template>
<script>
import ScrollY from '@/base/scroll-y/scroll-y.vue'
import Star from '@/base/star/star.vue'
export default{
  props: {
    moviesList: {
      type: Array
    },
    name: {
      type: String
    }
  },
  components: {
    Star,
    ScrollY
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable.styl'
  .more-movies{
    width: 100%
    height: 100%
    overflow: hidden
    background: white
  }
    .title{
      font-size: 0
      margin: 0 0 25px 20px
    }
      h1{
        font-size: 22px
        font-weight: normal
        color: #494949
      }
    ul{
      position: relative
      padding-left: 10px
      font-size: 0
    }
      .moviesList{
        display: inline-block
        width: 100px
        margin: 0 20px 20px 0
      }
        a{
          display: block
          width: 100%
          font-size: 0
        }
          img{
            display: block
            margin-left: 8px
            width: 100%
            height: 150px
          }
          .name{
            display: block
            width: 100%
            height: 28px
            line-height: 28px
            text-align: center
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            font-size: 14px
            color: #111111
          }
          .rating{
            width:100%
            text-align:center
            font-size:10px
            color: #AAAAAA
          }
</style>