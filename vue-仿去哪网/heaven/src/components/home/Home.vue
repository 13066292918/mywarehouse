<template>
  <div>
    <home-header></home-header>
    <home-nav :imgList="imgList"></home-nav>
    <home-favourite :favList="favList"></home-favourite>
    <home-weekend :weekList="weekList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./base/Header";
import HomeNav from "./base/Nav";
import HomeFavourite from "./base/favourite";
import HomeWeekend from "./base/Weekend"
import {getHome} from "../../api/index"
export default {
  name: "Home",
  components:{
    HomeHeader,
    HomeNav,
    HomeFavourite,
    HomeWeekend
  },
  data(){
    return {
      favList:[],
      imgList:[],
      weekList:[]
    }
  },
  created() {
    this.getDate()
  },
  methods:{
    async getDate(){
      let {favList,imgList,weekList} = await getHome()
      this.favList=favList
      this.imgList=imgList
      this.weekList=weekList
    }
  }
}
</script>

<style scoped>

</style>
