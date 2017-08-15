<template>
  <div class="scroll" ref="scroll">
    <div class="scroll-wrapper" ref="scrollList">
  	  <slot> 
      </slot>
  	</div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
const ImgWidth = 110
export default {
  mounted () {
    this.$nextTick(() => {
      this._setScrollWidth()
      this.$nextTick(() => {
        this._initScroll()
      })
    })
  },
  methods: {
    _setScrollWidth () {
      let width = 0
      this.children = this.$refs.scrollList.children
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.className = 'item-slider'
        // this.hasClass(child, 'item-slider')
        child.style.width = ImgWidth + 'px'
        width += ImgWidth
      }
      this.$refs.scrollList.style.width = width + 'px'
    },
    _initScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        momentum: true,
        click: true
      })
    }
    // hasClass (el, className) {
    //   let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    //   return reg.test(el.className)
    // }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.scroll{
  min-height: 1px
  width: 99%
  margin-left: 5px
}
  .scroll-wrapper{
  	position: relative
  	overflow: hidden 
  }
    .item-slider{
      float: left
    }
      a{
      	display: block
        width: 110px
        overflow: hidden
        padding-left: 5px
        text-decoration: none
      }
        img{
      	  display: block
          height: 142px
        }
        span{
          display: block
          width: 90%
          height: 28px
          line-height: 28px
          text-align: center
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          font-size: 15px
          color: #111111
        }
        div{
          width:100%
          text-align:center
          font-size:10px
          color: #AAAAAA
        }
</style>