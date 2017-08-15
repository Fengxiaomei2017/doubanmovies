<template>
  <div class="star" :class="starType">
  	<span v-for="itemstarClass in starClasses" class="itemClass" :class="itemstarClass"></span>
  	<span>{{score}}</span>
  </div>
</template>
<script>
const starOn = 'on'
const starOff = 'off'
const length = 5
export default{
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
    starClasses () {
      let arr = []
      let score = parseInt(Math.ceil(this.score) / 2)
      for (let i = 0; i < score; i++) {
        arr.push(starOn)
      }
      while (arr.length < length) {
        arr.push(starOff)
      }
      return arr
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.star{
  font-size: 10px
}
  .itemClass{
  	display: inline-block
  	background-repeat: no-repeat
  }
  &.star-36{}
    .itemClass{
      width: 15px
      height: 15px
      margin-right: 6px
      background-size: 15px 15px
    }
      &.on{
        background-image: url("star36_on@2x.png")
      }
      &.off{
      	background-image: url("star36_off@2x.png")
      }
  &.star-24{}
    .itemClass{
      width: 10px
      height: 10px
      margin-right: 3px
      background-size: 10px 10px
    }
      &.on{
        background-image: url("star24_on@2x.png")
      }
      &.off{
      	background-image: url("star24_off@2x.png")
      }
</style>