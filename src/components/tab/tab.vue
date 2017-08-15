<template>
<div class="m-header">
  <div class="title-wrapper">
  	<a href="javascript:">
  	  <span class="title">豆瓣</span>
  	</a>
  </div>
  <div class="tab">
  	<router-link class="tab-item" to="/movies">
  	  <span class="movie">电影</span>
  	</router-link>
  	<router-link class="tab-item" to="/books">
  	  <span class="book">图书</span>
  	</router-link>
  	<router-link class="tab-item" to="/radio">
  	  <span class="radio">广播</span>
  	</router-link>
  	<router-link class="tab-item" to="/group">
  	  <span class="group">小组</span>
  	</router-link>
  	<router-link class="tab-item" to="/search">
  	  <span><i class="icon-search"></i></span>
  	</router-link>
  </div>
</div>	
</template>
<script>
export default{}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-header{
    position: relative
    height: 50px
    line-height: 50px
    border-bottom: 1px solid #F3F3F3
    font-size: 0
  }
    .title-wrapper{
      float: left
    }
      .title{
        font-size: 22px
        margin-left: 10px
        color: #05B512
        font-weight: bold
      }
    .tab{
      float: right
      display: flex
      width: 250px
      font-size: 0
    }
      .tab-item{
        flex: 1
        text-align: center
        font-size: 15px
      }
        .movie{
         color: #2384E8
        }
        .book{
          color: #A58069
        }
        .radio{
          color:#E8B536
        }
        .group{
         color: #65CCDA
        }
        .icon-search{
          color: #05B512
        }
</style>