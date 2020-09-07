<template>
  <div class="searh">
    <input type="text" placeholder="请输入城市名和拼音" v-model="keywork">
    <div class="searh-content" v-show="keywork">
      <ul>
        <li class="border-bottom-1px" v-for="city in fiLterCity" :key="city.id" @click="handleClick(city.name)">{{ city.name }}</li>
        <li class="border-bottom-1px" v-if="!fiLterCity.length">没有数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "searh",
  props:['cities'],
  data(){
    return{
      keywork:'',
      click:true
    }
  },
  computed:{
    fiLterCity(){
      let result = []
      for(let i in this.cities){
        this.cities[i].list.forEach((city)=>{
          if(city.name.includes(this.keywork)||city.pinyin.includes(this.keywork)){
            result.push(city)
          }
        })
      }
      return result
    },
  },
  methods: {
    handleClick(city){
      this.$store.commit('chageCity',city)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
.searh
  height 3rem
  line-height 3rem
  padding .3rem
  background: #00bcd4
  z-index 9
  input
    width 100%
    height 80%
    border-radius .3rem;
    text-align center
  .searh-content
    position fixed
    overflow: hidden;
    top:6rem
    left 0
    right 0
    bottom: 0;
    background #ccc
    li
      background #fff
      padding-left .5rem
</style>
