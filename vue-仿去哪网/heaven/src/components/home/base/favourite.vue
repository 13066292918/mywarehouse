<template>
  <div class="favourite">
    <div class="fav-top">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      <h3>猜你喜欢</h3>
    </div>
    <ul>
      <router-link tag="li" :to="{name:'user',params:{id:item.id}}" class="item border-bottom-1px" v-for="item in favList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <h4>{{ item.title }}</h4>
          <div class="item-fav-info">
            <p class="item-fav-text">
              <i class="iconfont icon-xingxing" v-for="i in 5"></i>
              <span class="item-fav-star" :style="item.score|star">
                <i class="iconfont icon-xingxing" v-for="i in 5"></i>
              </span>
            </p>
            <p class="item-text-right">{{ item.comment }}条评论</p>
          </div>
          <p class="item-price">{{ item.price|price }}</p>
          <div class="item-desc">{{ item.desc }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "favourite",
  props:['favList'],
  filters:{
    star(score){
      return {
        width:score*100/5+'%'
      }
    },
    price(p){
      return '¥'+p+'起'
    }
  }
}
</script>

<style scoped lang="stylus">
.favourite{
  margin-top 1.3rem
  padding-left .8rem
}
  .fav-top
    height 3rem
    line-height 3rem
    img
      width 1rem
    h3
      line-height 2rem
      display inline-block
  .item
    display flex
    height 8rem
    padding .5rem
    .item-img
      width 6rem
      height: 6rem;
    .item-info
      flex 1
      padding .2rem
      margin-left: .5rem;
      min-width: 0rem;
      h4
        line-height: 1.5rem;
        font-size .6rem
      .item-price
        color #ff8300
        font-size .6rem
        line-height: .8rem;
        margin-top 1rem
      .item-fav-info
        height 1.4rem
        line-height 1.4rem
        .item-fav-text
          position: relative;
          display inline-block
          float left
          color #cccccc
          .item-fav-star
            overflow hidden
            position: absolute;
            left 0
            top 0
            color #ffb436
        .item-text-right
          float: left;
          color: #616161;
          font-size: .24rem;
          margin-left 1rem
      .item-desc
        color: #f55;
        font-size: .24rem
        margin-top: .6rem;
        margin-left .8rem
</style>
