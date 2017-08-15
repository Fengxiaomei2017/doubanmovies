<template>
<transition name="slide">
<div class="wrapper">
  <more-movies :moviesList="moviesList" :name="name"></more-movies>
</div>
</transition> 
</template>
<script>
import {getFreeMoviesList, getMoviesList, getName} from '@/api/movies.js'
import MoreMovies from './more-movies.vue'
export default{
  data () {
    return {
      moviesList: [],
      name: ''
    }
  },
  created () {
    this._getFreeMoviesList()
  },
  methods: {
    _getFreeMoviesList () {
      getFreeMoviesList().then((res) => {
        this.moviesList = getMoviesList(res.subject_collection_items)
        this.name = getName(res.subject_collection)
      })
    }
  },
  components: {
    MoreMovies
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper{
    position: absolute
    z-index: 100 
    height: 100%
    top: 0
    left: 0
    right: 0
    bottom: 10px
    background: white
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 0.5s
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0)
  }
</style>