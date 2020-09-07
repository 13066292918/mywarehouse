<template>
  <div>
    <city-header></city-header>
    <city-searh :cities="cities"></city-searh>
    <city-list :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from "./base/Header"
import CitySearh from "./base/searh";
import CityList from "./base/List";
import {getCity} from '../../api/index'
export default {
  name: "City",
  data(){
    return{
      cities:[]
    }
  },
  components: {
    CityHeader,
    CitySearh,
    CityList
  },
  created() {
    this.getDate()
  },
  methods:{
    async getDate(){
      let {cities} = await getCity()
      this.cities=cities
    }
  }
}
</script>

<style scoped>

</style>
