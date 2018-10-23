<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goTo('/msite')"
       :class="{on:$route.path==='/msite'}"
    >
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/things')"
       :class="{on:$route.path==='/things'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/classify')"
       :class="{on:$route.path==='/classify'}">
      <span class="item_icon">
        <i class="iconfont icon-category"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shopcart')"
       :class="{on:$route.path==='/shopcart'}">
      <span class="item_icon">
        <i class="iconfont icon-shoppingcart"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')"
       :class="{on:$route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-mine"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goTo(path) {//通过路由导航跳转到新路由
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.333rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.1333rem
      color #999999
      &.on
        color red
      span
        font-size 0.32rem
        margin-top 0.053rem
        margin-bottom 0.053rem
        .iconfont
          font-size 0.587rem
</style>
