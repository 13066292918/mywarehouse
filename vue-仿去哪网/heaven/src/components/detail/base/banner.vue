<template>
  <div class="banner">
    <img class="banner-img" :src="bannerimg" @click="handleClick">
    <div class="banner-info">
      <p class="banner-number">
        <span>{{gallaryimgs.length}}张</span>
      </p>
      <div class="banner-titie">{{ sightName }}</div>
    </div>

    <common-gallary :gallaryimgs="gallaryimgs" @close="handleClick" v-if="onshow"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../../common/Gallary";
export default {
  props:['sightName','bannerimg','gallaryimgs'],
  name: "banner",
  components: {
    CommonGallary
  },
  data(){
    return{
      onshow:false
    }
  },
  methods:{
    handleClick(){
      this.onshow=!this.onshow
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  position: relative;
  height 0
  padding-bottom: 55%;
  overflow: hidden
  .banner-img
    width 100%
  .banner-info
    position absolute
    left 0
    right: 0;
    bottom 0
    color #fff
    background-image linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))
    line-height 1.8rem
    .banner-titie
      font-size 1.5rem
      padding .6rem
      color: #fff;
    .banner-number
      position: absolute;
      left  0
      top -2rem
      height 1.5rem
      line-height: 1.5rem;
      margin-top .3rem
      margin-left: .5rem;
      padding 0 .8rem
      border-radius .5rem
      background rgba(0,0,0,.5)
      font-size .5rem
</style>
