<template>
<div class="wrapper">
  <h2 class="title">{{find.title}}</h2>
  <div class="find-movies" ref="scroll">
  	<ul v-if="contain.length" class="wrapper-list" ref="scrollList">
  	  <li v-for="item in contain"><a class="description" :class="item.bgColor" href="javascript">{{item.text}}</a></li>
  	</ul>
  </div>
  <h2 class="title">{{sort.title}}</h2>
  <div class="diff-movies-list">
    <ul>
      <li class="diff-movie" v-for="item in sort.contain">
        <span class="sort">{{item}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </li>
    </ul>
  </div>
  <div class="download-app">
    <div class="content-wrapper">
      <div class="info-content">
        <span class="info-title">豆瓣</span>
        <div class="info-descrition">我们的精神角落</div>
      </div>
      <div class="info">
        <img width="48" height="48" src="./douban-logo.png">
      </div>
    </div>
    <a class="go-download" href="javascript:">去 App Store 免费下载 iOS 客户端</a>
  </div>
</div>	
</template>
<script>
import BScroll from 'better-scroll'
const num = 1.8
export default {
  props: {
    find: {
      type: Object
    },
    contain: {
      type: Array
    },
    sort: {
      type: Object
    }
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        this._setScrollWidth()
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    }, 20)
  },
  methods: {
    _setScrollWidth () {
      let width = 0
      this.children = this.$refs.scrollList.children
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.className = 'item-slider'
        if (child.clientWidth) {
          width += child.clientWidth
        }
      }
      this.$refs.scrollList.style.width = width / num + 'px'
    },
    _initScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        // 滑动惯性
        momentum: true,
        click: true
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable.styl'
.wrapper{
  width: 100%
  font-size: 0
}
  .title{
    width: 100px
    margin-left: 15px
    font-size: 17px
    font-weight: normal
  }
  .find-movies{
  	min-height: 1px
  	width: 100%
  	position: relative
  	overflow: hidden
  }
    .wrapper-list{
      padding-left: 0
    }
      .item-slider{
      	float: left
      	margin: 0 0 8px 8px
      }
      .description{
        display: inline-block  
        height: 50px
        padding: 0 1.55rem
        line-height: 50px
        overflow: auto
        text-align: center
        border-radius: 5px
        font-size: 15px
      }
        &.one{
      	  color: #FFD391
      	  border: 1px solid #FFD391
        }
        &.two{
          color: #FF7080
          border: 1px solid #FF7080
        }
        &.three{
          color: #7BB6F2
          border: 1px solid #7BB6F2	
        }
        &.fore{
          color: #5AA3EE
          border: 1px solid #5AA3EE	         
        }
        &.five{
          color: #42BD56
          border: 1px solid #42BD56
        }
        &.six{
          color: #CC3344
          border: 1px solid #CC3344
        }
        &.seven{
          color: #3BA94D
          border: 1px solid #3BA94D
        }
        &.nine{
          color: #FFAC2D
          border: 1px solid #FFAC2D
        }
  .diff-movies-list{
    width: 100%
    font-size: 0
    height: auto
  }
    ul{
      padding-left: 10px
    }
      .diff-movie{
        position: relative
        display: inline-block
        width: 49%
        height: 40px
        line-height: 40px
        border: 1px solid #EEEEEE
        border-bottom: none
        border-left: none
      }
       .sort{
         margin-left: 10px
         font-size: 15px
         color: #05B512
       }
       .icon-keyboard_arrow_right{
         position: absolute
         right: 0
         top: 10px
         font-size: 20px
         color: #CDCDCD
       }
  .download-app{
    margin-top: 60px
    font-size: 0
  }
    .content-wrapper{
      position: relative
      margin: 0 auto
      width: 158px
      height: 50px
    }
      .info{
        float: left
      }
      .info-content{
        float: right
        margin-top: 5px
        font-size: 0
      }
        .info-title{
          font-size: 23px
        }
        .info-descrition{
          font-size: 14px
          margin-top: 5px
        }
    .go-download{
      display: inline-block
      width: 100%
      height: 48px
      line-height: 48px
      text-align: center
      font-size: 14px
      color: #05B512
    }
</style>