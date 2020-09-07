<template>
 <div>
   <div class="journey" v-for="item in journeyInfo">
     <ul class="journey-title">
       <li v-if="item.title">{{ item.title }}</li>
       <li>
         <span class="journey-border"></span>
         <span>{{ item.border }}</span>
       </li>
     </ul>
     <div class="journey-text">
       <div class="journey-item" v-for="(i,index) in item.text"  @click="handleClick(i)" :key="index">
         <div class="journey-info">
           <div class="journey-left">
             <h4 class="journey-title">{{ i.ticket }}</h4>
           </div>
           <div class="journey-right">
             ¥{{i.price}}起
             <i class="iconfont icon-xiangzuo" v-if="i.extend.length"></i>
           </div>
         </div>

         <detail-recommend :recommendInfo="i.extend" v-show="i.onshow&&i.extend.length"></detail-recommend>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import DetailRecommend from "./Recommend";
export default {
  name: "Journey",
  props:['journeyInfo'],
  components: {
    DetailRecommend
  },
  methods:{
    handleClick(item){
      item.onshow = !item.onshow
    }
  }
}
</script>

<style scoped lang="stylus">
.journey{
  padding 1rem

}
  .journey-title
    color #212121
    font-size 1.2rem
    li
      margin .8rem 0
      .journey-border
        display inline-block
        width .3rem
        height .8rem
        border-radius: 1.5rem
        background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%)
  .journey-text
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,0.10);
    border-radius: .16rem
    border #cccccc solid .1rem
    padding .8rem
    .journey-info
      position relative
      margin-top .5rem
      font-size: .8rem;
      line-height: 3rem
      .journey-right,.journey-left
        display inline-block
      .journey-right
        position absolute
        right 0
        color #ff9800
        i
          display inline-block
          transform rotate(270deg)

</style>
