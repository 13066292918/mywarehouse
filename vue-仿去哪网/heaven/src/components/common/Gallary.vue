<template>
  <div class="gallary" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(imgs,index) in gallaryimgs" :key="index">
          <img class="swiper-img" :src="imgs" style="height: 100%">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props:['gallaryimgs'],
  data(){
    return{
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'

        },
      },
      observeParents:true,
      observer:true,
    }
  },
  methods:{
    handleClick(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-container
  overflow inherit
.gallary
  position: fixed
  z-index 10
  left 0
  right: 0;
  top: 0;
  bottom 0
  background #000
  .wrapper
    position: absolute;
    top 0
    bottom 0
    margin auto
    width 100%
    height 0
    padding-bottom: 65%;
    background #fff
  .swiper-img
    width 100%
  .swiper-pagination
    bottom -3rem
    color #fff
</style>
