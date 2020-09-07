<template>
  <div class="header">
    <router-link to="/" tag="i" class="iconfont icon-xiangzuo header-goback" v-show="onshow"></router-link>
    <div class="header-fixed" v-show="!onshow" :style="StyleObj">
      <router-link to="/" tag="i" class="iconfont icon-xiangzuo header-back"></router-link>
      <h2>景点详情</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      onshow:true,
      StyleObj:{}
    }
  },
  methods:{
    handleScroll(){
      let scrollTop = document.documentElement.scrollTop
      if(scrollTop > 48){
        this.onshow=false
        this.StyleObj={opacity:(scrollTop-48)/100}
      }else {
        this.onshow=true
      }
    }
  },
  activated() {//需要在路由出口router-view外面套上keep-alive,否则不会生效
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated() {//在失去活性的时候取消事件,避免与其他组件冲突
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
.header
  position: fixed
  left 0
  top 0
  right 0
  z-index 1
  .header-goback
    position: absolute;
    width 3rem
    line-height 3rem
    border-radius 50%
    text-align center
    background rgba(0,0,0,.5)
    color #fff
    font-size 2rem
  .header-fixed
    position: relative;
    background #00bcd4
    line-height 3.2rem
    color #fff
    text-align center
    .header-back
      position: absolute;
      left 0
      top 0
      width 3rem
      font-size 2rem
    h2
      text-align center
      font-size 1rem

</style>
