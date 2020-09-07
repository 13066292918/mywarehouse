<template>
  <div class="list" ref="wrap">
     <div>
       <h2>字母排序</h2>
       <ul>
         <li v-for="(item,index) in cities" :key="index" @click="handle(index)">{{item.initial|Case}}</li>
       </ul>

       <div class="list-item" v-for="(item,key) in cities">
         <h2 class="list-h" :ref="key">{{item.initial|Case}}</h2>
         <ul>
           <li v-for="text in item.list" @click="handleClick(text.name)">{{text.name}}</li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "List",
  props:['cities'],
  filters:{
    Case(i){
      return i.toUpperCase()
    }
  },
  mounted(){
    this.scroll= new BScroll(this.$refs.wrap,{
      click:true
    })
  },
  methods:{
    handle(letter){
      this.$store.commit('chageLetter',letter)
    },
    handleClick(city){
      this.$store.commit('chageCity',city)
      this.$router.push('/')
    }
  },
  computed:{
    letter(){
      return this.$store.state.letter
    }
  },
  watch:{
    letter(key){
      this.scroll.scrollToElement(this.$refs[key][0])
    }
  }
}
</script>

<style scoped lang="stylus">
.list
  height 15rem
  h2
    height 3rem
    line-height 3rem
    padding-left 1rem
    font-size: 1rem
    background #f2f2f2
  li
    display inline-block
    width 16%
    text-align center
    height 3rem
    line-height: 3rem;
  .list-item li
    width 25%
    border #ddd 1px solid
</style>
