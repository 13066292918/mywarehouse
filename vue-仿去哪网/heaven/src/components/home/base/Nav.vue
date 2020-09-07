<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(imgs,index) in fiterImages" :key="index">
      <div class="nav">
        <div class="item" v-for="item in imgs" :key="item.id">
          <img class="item-img" :src="item.img">
          <div>{{ item.keywords }}</div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "Nav",
  props:['imgList'],
  data(){
    return{
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'//swiper如果是最新版本,分页器可能无法使用,目前版本5.4.5
        }
      },
    }
  },
  computed:{
    fiterImages(){
      let imgs=[]
      this.imgList.forEach((item,index)=>{
        let page = ~~(index/8)//~~是取整数的意思
        if(!imgs[page]){
          imgs[page]=[]
        }
        imgs[page].push(item)
      })
      return imgs
    }
  }
}
</script>

<style scoped lang="stylus">
.swiper-container{
  overflow visible
}
.nav
  display flex
  flex-wrap wrap
  height 12rem
  margin-top .3rem
  .item
    width 25%
    height 50%
    text-align center
    font-size .9rem
    .item-img
      width 3.5rem
      height 3.5rem
      margin-top .5rem
.swiper-pagination{
  bottom -10px
}
</style>
