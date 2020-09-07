<template>
  <div class="header">
    <i class="iconfont icon-xiangzuo"></i>
    <div class="header-input">
      <i class="iconfont icon-search"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link tag="div" to="/city" class="hearder-right">
      <span>{{ $store.state.city }}</span>
      <i class="iconfont icon-xiangxia"></i>
    </router-link>
  </div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  height 3rem
  background #00bcd4
  line-height 3rem
  .icon-xiangzuo
    width 3rem
    color #fff
    text-align center
  .header-input
    flex 1
    height 2rem
    line-height 2rem
    background #fff
    margin-top .5rem
    padding-left .5rem
    input
      display: inline-block;
      overflow: hidden;
      height 1.5rem
      vertical-alig middle
    icon-search
      vertical-align middle
  .hearder-right
    padding 0 .5rem
    color #fff
    span
      font-size .8rem
      vertical-align top
    .icon-xiangxia
      vertical-align top
      font-size .3rem

</style>
