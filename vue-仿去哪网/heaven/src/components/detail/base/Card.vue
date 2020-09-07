<template>
  <div class="card">
    <div class="card-desc">
      <div class="card-left card-item">
        <h3>{{ cardInfo.score }}分 <span>{{ cardInfo.desc }}</span></h3>
        <p>
          <span>{{ cardInfo.strategy }}条攻略</span>
          <span>{{ cardInfo.comment }}条评论</span>
        </p>
        <i class="icon-xiangzuo iconfont"></i>
      </div>

      <div class="card-right card-item">
        <h4>景点简介</h4>
        <p>开放时间,贴士</p>
        <i class="icon-xiangzuo iconfont"></i>
      </div>
    </div>
    <p class="card-address">
      {{ cardInfo.address }}
    </p>
  </div>
</template>

<script>
export default {
name: "Card",
  props:["cardInfo"]
}
</script>

<style scoped lang="stylus">
.card
  padding .6rem .6rem 0
  border-bottom .2rem solid #f5f5f5
  .card-desc
    position: flex  ;
    .card-item
      position: relative;
      width 49%
      display inline-block
      padding-bottom 1rem
      h3
        color #ff8300
        font-size: 1.3rem
        line-height: 1.3rem
        span
          font-size .9rem
          margin-left .3rem
      p
        color #9e9e9e
        font-size: .9rem
        line-height:1.2rem
        margin-top .3rem
        span
          margin-left .3rem
    .card-item .icon-xiangzuo
      position: absolute;
      right 10%
      top 25%
  .card-address
    position: relative;
    line-height 1.5rem
    text-align center
</style>
