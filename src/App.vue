<template>
  <div id="app">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab.vue'
export default {
  components: {
    Tab
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
