<template>
  <div class="comment">
    <h3>用户评论</h3>
    <div class="comment-container" v-for="(item,index) in commentInfo" :key="index">
      <p class="comment-desc">{{item.text}}</p>
      <div class="comment-item">
        <img :src="i" class="comment-img" v-for="(i,key) in item.imgUrl" v-if="key<=5" :key="key" @click="handleClick">
        <span class="img-amout" v-if="item.imgUrl.length>5">共{{item.imgUrl.length}}张</span>
      </div>

      <common-gallary :gallaryimgs="item.imgUrl" @close="handleClick" v-if="onshow"></common-gallary>
    </div>
  </div>
</template>

<script>
import CommonGallary from "../../common/Gallary";
export default {
  name: "Comment",
  props:['commentInfo'],
  components:{
    CommonGallary
  },
  data(){
    return{
      onshow:false,
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
h3
  line-height 2.5rem
  padding-left 1rem
  font-size 1rem
.comment-container
  padding 0 .6rem 1.2rem
  line-height: 1.2rem;
  font-size .6rem
  color :#616161
  .comment-desc
    overflow: hidden;
    text-overflow: ellipsis;
    padding .6rem 0
  .comment-item
    position: relative;
    overflow: hidden;
    margin-top .8rem
    .comment-img
      float left
      width 32%
      margin-right 1.2%
      margin-bottom 1.2%
    .img-amout
      position: absolute;
      right .3rem
      bottom .9rem
      padding 0 .15rem
      font-size .7rem
      color #fff
      border .6rem 0 0 .6rem
      background-color rgba(0,0,0,.5)
</style>
