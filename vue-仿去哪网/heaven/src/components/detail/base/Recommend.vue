<template>
  <div class="recommend">
    <slot></slot>
    <div class="recommend-info" v-for="(item,index) in recommendInfo" :key="index">
      <div class="recommend-left">
        <h4 class="recommend-title">{{item.title}}</h4>
        <p>{{item.time}}</p>
        <span class="border">条件退</span>
      </div>
      <div class="recommend-right">
        <span>¥{{item.price}}</span>
        <div class="recommend-bottom">立即预定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:['recommendInfo']
}
</script>

<style scoped lang="stylus">
.recommend
  padding 0 .5rem
  border-bottom .2rem solid #f5f5f5
  h3
    margin-top .5rem
    font-size 1.5rem
    padding 1rem .5rem
  .recommend-info
    display flex
    justify-content space-between
    padding 1rem 0 1.5rem
    .recommend-left
      width 15rem
      h4
        display -webkit-box
        overflow hidden
        line-height 1.5rem
        font-size .8rem
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        color #212121
        padding .2rem
      p,span
        line-height 1.2rem
        color #00afc7
        font-size .8rem
    .recommend-right
      display flex
      flex-direction column
      justify-content center
      width 5rem
      text-align center
      margin-right 1rem
      span
        color #ff8300
        font-size 1rem
        font-weight 400
      .recommend-bottom
        height 2rem
        line-height 2rem
        font-size .8rem
        border-radius 1.3rem
        color #fff
        background-image: linear-gradient(145deg,#ffab1e 0,#ff8c12 100%)
</style>
