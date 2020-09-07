<template>
  <div>
    <h3 class="fav-top">周末去哪儿</h3>
    <ul>
      <li class="item border-bottom-1px" v-for="item in weekList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <h4>{{ item.title }}</h4>
          <div class="item-desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Weekend",
  props:['weekList']
}
</script>

<style scoped lang="stylus">
.fav-top
  height 3rem
  line-height 3rem
  color: #212121
  padding-left: .8rem
  background #F2F2F2
.item-img{
  width: 100%;
}
.item-info
  padding .8rem .8rem 1.5rem
  .item-desc
    color: #616161;
    font-size: .24rem
    padding-right: 1.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
</style>
