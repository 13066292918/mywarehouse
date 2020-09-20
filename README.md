vue仿造去哪网移动端页面

主要的数据是放在文件夹里面的,所以这里axios读取文件里的内容,进行传输
import axios from 'axios'  

axios.interceptors.response.use(function (response){  
  return response.data.data  
})  

export let getHome=()=>{  
  return axios.get('/static/mork/index.json')  
}  

export let getCity=()=>{  
  return axios.get('/static/mork/cityList.json')  
}  

export let getDetail=(id)=>{  
  return axios.get('/static/mork/detail/'+id+'.json')  
}  



home组件接受数据,并把数据传输到各个子页面中,推动视图的变化  
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


![image](https://github.com/13066292918/applet-news/blob/master/describe/009.png)
![image](https://github.com/13066292918/applet-news/blob/master/describe/010.png)



点击右上角的位置,会弹出选择城市的界面,并且可以输入拼音,识别城市

fiLterCity(){//输入拼音或名字的时候筛选,并把结果数组返回
      let result = []  
      for(let i in this.cities){  
        this.cities[i].list.forEach((city)=>{  
          if(city.name.includes(this.keywork)||city.pinyin.includes(this.keywork)){  
            result.push(city)  
          }  
        })  
      }  
      return result  
    }  
    
![image](https://github.com/13066292918/applet-news/blob/master/describe/011.png)
![image](https://github.com/13066292918/applet-news/blob/master/describe/012.png)



点击详情页的时候,跳转到详情页,并通过swiper插件,点击图片的时候,弹出轮播图
<swiper :options="swiperOptions">  
        <swiper-slide v-for="(imgs,index) in gallaryimgs" :key="index">  
          <img class="swiper-img" :src="imgs" style="height: 100%">  
        </swiper-slide>  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>  
    
![image](https://github.com/13066292918/applet-news/blob/master/describe/013.png)
![image](https://github.com/13066292918/applet-news/blob/master/describe/014.png)
![image](https://github.com/13066292918/applet-news/blob/master/describe/015.png)
