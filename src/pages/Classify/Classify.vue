<template>
  <div>

    <div class="wrapCllass">
      <div class="hd">
        <div class="inner">
          <i class="iconfont icon-sousuo"></i>
          搜索商品共16943款好物
        </div>
      </div>

      <div class="wrapUl">
        <ul class="list">
          <li class="item" :key="index" @click="currentIndex(index)"
              :class="{active:current===index}"
              v-for="(ClassNames,index) in classData.categoryL1List">
            {{ClassNames.name}}
          </li>
        </ul>
      </div>

      <div class="line"></div>

      <div class="rightWrap">

        <div class="imgArr" v-show="current === index"
             v-for="(category,index) in classData.categoryL1List" :key="index">
          <div class="imgWrap">
            <img :src="category.bannerUrl" alt="img"
                 style="height: 192px; width: 528px">
          </div>
          <div class="ulWrap">
            <ul class="list" >
              <li class="item" :key="index"
                  v-for="(categories,index) in category.subCateList">
                <img :src="categories.wapBannerUrl" alt="img"
                     style="height: 144px; width: 144px">
                <div class="text">{{categories.frontName}}</div>
              </li>
            </ul>
          </div>

        </div>




      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        current: 0,//点击li切换样式
      /*  subCateList:[]*/
      }
    },
    methods: {
      currentIndex(index) {
        this.current = index
      }
    },
    computed: {
      ...mapState(['classData'])
    },
    mounted() {
      this.$store.dispatch('getClassData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrapCllass
    width 100%
    font-size .4rem
    position relative
    overflow hidden
    clearFix()
    .hd
      width: 100%
      height 1.2rem
      display flex
      justify-content center
      align-items center
      border-bottom 1px solid grey
      position fixed
      left 0
      top 0
      background #ffffff
      z-index 100
      .inner
        height .8rem
        width 9rem
        line-height .8rem
        text-align center
        font-size .4rem
        background #e4e4e4
        border-radius .1rem
        color gray
        .iconfont
          font-size .4rem

    .wrapUl
      width 2.4rem
      margin-top 2.1rem
      .item
        margin .3rem 0
        line-height .66667rem
        text-align center
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        display block
        color gray
        border-left 5px solid transparent
        &.active
          color #b4282d
          border-left 5px solid #b4282d
    .line
      position fixed
      left 180px
      top 91px
      height 100%
      width 1px
      background grey
    .rightWrap
      margin-top .3rem
      font-size .4rem
      position absolute
      top 1.7rem
      right 0.3rem
      width 7.04rem
      .imgWrap
        height 192px
        width 528px
        margin-bottom .42667rem
        img
          border-radius .1rem
      .ulWrap
        background lightcoral
        font-size .35rem
        .list
          width 528px
          .item
            width 144px
            float left
            height 257px
            margin-right .4rem
            .text
              width 144px
              font-size .35rem
              text-align center
              color grey



</style>
