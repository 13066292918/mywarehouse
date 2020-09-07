<template>
  <div class="header">
    <router-link tag="i" to="/" class="iconfont icon-xiangzuo"></router-link>
    <h2>城市选择</h2>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="stylus">
.header
  z-index 9
  position: relative;
  background: #00bcd4
  height 3rem
  line-height 3rem
  color #fff
  text-align center
  i
    position: absolute;
    font-size 2rem
    left 5%
    top 0
  h2
    display inline-block
</style>
