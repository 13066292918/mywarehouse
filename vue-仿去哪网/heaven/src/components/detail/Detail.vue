<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerimg="bannerimg" :gallaryimgs="gallaryimgs"></detail-banner>
    <detail-header></detail-header>
    <detail-card :cardInfo="cardInfo"></detail-card>
    <detail-recommend :recommendInfo="recommendInfo">
      <h3>去哪儿推荐</h3>
    </detail-recommend>
    <detail-journey :journeyInfo="journeyInfo"></detail-journey>
    <detail-comment :commentInfo="commentInfo"></detail-comment>
  </div>
</template>

<script>
import DetailBanner from "./base/banner";
import DetailHeader from "./base/Header";
import DetailCard from "./base/Card";
import DetailRecommend from "./base/Recommend";
import DetailJourney from "./base/Journey";
import DetailComment from "./base/Comment";
import {getDetail} from '../../api/index'
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailCard,
    DetailRecommend,
    DetailJourney,
    DetailComment
  },
  data(){
    return{
      bannerimg:'',
      sightName:[],
      gallaryimgs:[],
      cardInfo:[],
      recommendInfo:[],
      journeyInfo:[],
      commentInfo:[]
    }
  },
  activated(){
    this.getDate()
  },
  methods:{
    async getDate(){
      let {bannerimg,sightName,gallaryimgs,cardInfo,recommendInfo,journeyInfo,commentInfo}=await getDetail(this.$route.params.id)
      this.bannerimg=bannerimg
      this.sightName=sightName
      this.gallaryimgs=gallaryimgs
      this.cardInfo=cardInfo
      this.recommendInfo=recommendInfo
      this.journeyInfo=journeyInfo
      this.commentInfo=commentInfo
    }
  }
}
</script>

<style scoped>
</style>
