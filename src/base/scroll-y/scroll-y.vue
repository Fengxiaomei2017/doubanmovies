<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      // 默认不监听滚动事件
      listenScroll: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
      setTimeout(() => {
        this.$nextTick(() => {
          this._initScroll()
        })
      }, 20)
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })

        // 如果监听滚动事件
        // if (this.listenScroll) {
        //   let _this = this
        //   this.scroll.on('scroll', (pos) => {
        //     // 回调，拿到pos,派发一个事件出去
        //     // 在vue上调用scroll事件，在外面就可以监听scroll事件，然后拿到位置
        //     _this.$emit('scroll', pos)
        //   })
        // }
      },
      disable () {
        this.scroll && this.scroll.disable()
      },
      enable () {
        this.scroll && this.scroll.enable()
      },
      refresh () {
        this.scroll && this.scroll.refresh()
      },
      scrollTo () {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement () {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
